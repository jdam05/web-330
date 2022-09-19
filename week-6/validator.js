/**
 *
 * Title: validator.js
 * Date: September 13, 2022
 * Author: Jamal Eddine Damir
 * Description: Class to validate requirements
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// Importing classes
import { RequiredField } from "./required-fields.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Exported Validator class with constructor that creates and initializes objects
export class Validator {
	validators = [];
	messages = [];

	constructor(name, field) {
		this.name = name;
		this.field = field;
	}

	// Pushing class instances to validators array
	addRequiredField() {
		this.validators.push(new RequiredField(this.name, this.field));
	}
	addRequiredFloatField() {
		this.validators.push(new FloatField(this.name, this.field));
	}
	addFloatMinField(min) {
		this.validators.push(new FloatMinField(this.name, this.field, min));
	}
	addFloatMaxField(max) {
		this.validators.push(new FloatMaxField(this.name, this.field, max));
	}

	// Pushing error messages to messages array if condition is false otherwise return true
	validate() {
		for (let validator of this.validators) {
			if (validator.validate() === false) {
				this.messages.push(validator.getMessage());
				return false;
			}
		}
		return true;
	}
}
