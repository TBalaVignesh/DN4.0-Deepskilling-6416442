CREATE TABLE interest_audit (
  log_id         NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  account_id     NUMBER,
  old_balance    NUMBER,
  interest       NUMBER,
  new_balance    NUMBER,
  processed_on   DATE DEFAULT SYSDATE
);
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
  v_interest   NUMBER;
  v_old_balance NUMBER;
BEGIN
  FOR acc IN (
    SELECT account_id, balance
    FROM accounts
    WHERE account_type = 'savings'
  ) LOOP
    v_old_balance := acc.balance;
    v_interest := acc.balance * 0.01;

    UPDATE accounts
    SET balance = balance + v_interest
    WHERE account_id = acc.account_id;

    INSERT INTO interest_audit (account_id, old_balance, interest, new_balance)
    VALUES (acc.account_id, v_old_balance, v_interest, v_old_balance + v_interest);
  END LOOP;

  COMMIT;
END;
/
CREATE TABLE bonus_audit (
  log_id          NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  emp_id          NUMBER,
  old_salary      NUMBER,
  bonus_percent   NUMBER,
  new_salary      NUMBER,
  updated_on      DATE DEFAULT SYSDATE
);

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_department_id IN NUMBER,
  p_bonus_percent IN NUMBER
) AS
BEGIN
  IF p_bonus_percent > 25 THEN
    RAISE_APPLICATION_ERROR(-20002, 'Bonus percent exceeds allowed limit.');
  END IF;

  FOR emp IN (
    SELECT emp_id, salary
    FROM employees
    WHERE department_id = p_department_id
  ) LOOP
    INSERT INTO bonus_audit(emp_id, old_salary, bonus_percent, new_salary)
    VALUES (
      emp.emp_id,
      emp.salary,
      p_bonus_percent,
      emp.salary + (emp.salary * p_bonus_percent / 100)
    );

    UPDATE employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE emp_id = emp.emp_id;
  END LOOP;

  COMMIT;
END;
/
CREATE TABLE transfer_log (
  log_id        NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  from_account  NUMBER,
  to_account    NUMBER,
  amount        NUMBER,
  transfer_time DATE DEFAULT SYSDATE,
  status        VARCHAR2(30),
  message       VARCHAR2(200)
);
CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_account IN NUMBER,
  p_to_account   IN NUMBER,
  p_amount       IN NUMBER
) AS
  v_balance NUMBER;
  v_message VARCHAR2(200);
BEGIN
  -- Check sufficient balance
  SELECT balance INTO v_balance
  FROM accounts
  WHERE account_id = p_from_account;

  IF v_balance < p_amount THEN
    v_message := 'Transfer failed: Insufficient balance.';
    INSERT INTO transfer_log (from_account, to_account, amount, status, message)
    VALUES (p_from_account, p_to_account, p_amount, 'FAILED', v_message);
    RAISE_APPLICATION_ERROR(-20001, v_message);
  END IF;

  -- Proceed with transfer
  UPDATE accounts SET balance = balance - p_amount WHERE account_id = p_from_account;
  UPDATE accounts SET balance = balance + p_amount WHERE account_id = p_to_account;

  INSERT INTO transfer_log (from_account, to_account, amount, status, message)
  VALUES (p_from_account, p_to_account, p_amount, 'SUCCESS', 'Transfer completed successfully.');

  COMMIT;
END;
/