/**
 * Title: float-field.js
 * Date: September 13, 2022
 * Author: Jamal Eddine Damir
 * Description: Class to verify if user input is a Float
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// exported Float class with constructor that creates and initializes objects
export class FloatField {
	constructor(name, field) {
		this.name = name;
		this.field = field;
	}
	// Verifying if input is a Float
	validate() {
		return !isNaN(parseFloat(this.field));
	}
	// Error message to be displayed if value from input is not a  Float
	getMessage() {
		return `${this.name} must be a float value. You entered 
        ${this.field}`;
	}
}
