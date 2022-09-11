/**
 * Title: appetizer.js
 * Date: September 07, 2022
 * Author: Jamal Eddine Damir
 * Description: Class with constructor method that creates and initializing object
 *              to contain products for sale.
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// Importing product class
import { Product } from "./product.js";

// exported class with constructor that creates and initializes food item object
export class Appetizer extends Product {
	constructor(name, price) {
		super(name, price);
	}
}
