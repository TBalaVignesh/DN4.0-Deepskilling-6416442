-- Create customers table
CREATE TABLE customers (
  customer_id   NUMBER PRIMARY KEY,
  name          VARCHAR2(50),
  age           NUMBER,
  balance       NUMBER,
  IsVIP         VARCHAR2(5)
);

-- Create loans table
CREATE TABLE loans (
  loan_id        NUMBER PRIMARY KEY,
  customer_id    NUMBER,
  interest_rate  NUMBER,
  due_date       DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert sample customers
INSERT INTO customers VALUES (1, 'John Doe', 65, 8000, 'FALSE');
INSERT INTO customers VALUES (2, 'Jane Smith', 45, 12000, 'FALSE');
INSERT INTO customers VALUES (3, 'Emily Green', 70, 15000, 'FALSE');

-- Insert sample loans
INSERT INTO loans VALUES (101, 1, 10.0, SYSDATE + 15); -- due soon
INSERT INTO loans VALUES (102, 2, 9.5, SYSDATE + 40);  -- not due soon
INSERT INTO loans VALUES (103, 3, 11.0, SYSDATE + 20); -- due soon

COMMIT;
BEGIN
  FOR rec IN (
    SELECT c.customer_id, l.loan_id
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE c.age > 60
  ) LOOP
    UPDATE loans
    SET interest_rate = interest_rate - 1
    WHERE loan_id = rec.loan_id;
  END LOOP;

  COMMIT;
END;
SET SERVEROUTPUT ON;

BEGIN
  FOR rec IN (
    SELECT customer_id
    FROM customers
    WHERE balance > 10000
  ) LOOP
    UPDATE customers
    SET IsVIP = 'TRUE'
    WHERE customer_id = rec.customer_id;
  END LOOP;
  COMMIT;
END;


BEGIN
  FOR rec IN (
    SELECT c.name, l.due_date
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan for ' || rec.name || ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
