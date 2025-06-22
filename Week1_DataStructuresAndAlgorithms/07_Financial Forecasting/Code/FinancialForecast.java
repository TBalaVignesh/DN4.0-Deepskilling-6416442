package Financial;

import java.util.Scanner;

public class FinancialForecast {

    public static double futureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return futureValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the starting amount:");
        double initialInvestment = scanner.nextDouble();
        System.out.println("Enter the Growth:");
        double growthRate = scanner.nextDouble();
        System.out.println("Enter the Forecast:");
        int forecastYears = scanner.nextInt();


        double futureVal = futureValue(initialInvestment, growthRate, forecastYears);

        System.out.printf("Future Value after %d years: ₹%.2f%n", forecastYears, futureVal);
    }
}

