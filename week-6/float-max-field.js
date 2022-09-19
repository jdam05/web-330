/**
 * Title: float-max-field.js
 * Date: September 13, 2022
 * Author: Jamal Eddine Damir
 * Description: Class to verify if user input is less than maximum interest rate(100)
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// exported FloatMaxField class with constructor that creates and initializes objects
export class FloatMaxField {
	constructor(name, field, max) {
		this.name = name;
		this.field = field;
		this.max = max;
	}
	// Verifying if the value is less than the passed in maximum value and returning a boolean value.
	validate() {
		let floatField = parseFloat(this.field);
		return floatField < this.max;
	}
	// Error message to be displayed if the input value is not less than the set maximum value
	getMessage() {
		return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
	}
}
