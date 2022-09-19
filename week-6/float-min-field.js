/**
 * Title: float-min-field.js
 * Date: September 13, 2022
 * Author: Jamal Eddine Damir
 * Description: Class to verify if user input is more than minimum monthly payment(100)
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// exported FloatMinField class with constructor that creates and initializes objects
export class FloatMinField {
	constructor(name, field, min) {
		this.name = name;
		this.field = field;
		this.min = min;
	}
	// Verifying if the value is more than the passed-in minimum value and returning a boolean value.
	validate() {
		let floatField = parseFloat(this.field);
		return floatField > this.min;
	}

	// Displaying error message if the input value is not more than the set minimum value
	getMessage() {
		return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
	}
}
