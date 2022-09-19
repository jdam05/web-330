/**
 * Title: finance-calculator.js
 * Date: September 13, 2022
 * Author: Jamal Eddine Damir
 * Description: Class for future value calculation
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// exported FinanceCalculator class with static property and method to calculate future value
export class FinanceCalculator {
	static MONTHS_IN_YEAR = 12;

	static calculateFutureValue(monthlyPayment, rate, years) {
		let months = years * FinanceCalculator.MONTHS_IN_YEAR;
		let interestRate = 1 + rate / 100;
		let presentValue = monthlyPayment * months;
		let futureValue = presentValue * Math.pow(interestRate, months);

		return futureValue.toFixed(2);
	}

	// Static method that converts the result of the calculation to currency as USD
	static convertToCurrency(field) {
		let currencyFormatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		});

		return currencyFormatter.format(field);
	}
}
