/**
 * Title: required-fields.js
 * Date: September 13, 2022
 * Author: Jamal Eddine Damir
 * Description: Class to verify if the required fields are not empty
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// exported RequiredField class with constructor that creates and initializes objects
export class RequiredField {
	constructor(name, field) {
		this.name = name;
		this.field = field;
	}
	// Returning boolean value based on if the input value is a string or not.
	validate() {
		return Boolean(this.field);
	}

	// Displaying error message if input is empty
	getMessage() {
		return `${this.name} is a required field`;
	}
}
