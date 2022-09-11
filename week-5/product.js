/**
 * Title: product.js
 * Date: September 10, 2022
 * Author: Jamal Eddine Damir
 * Description: Class for product objects
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// exported Product class with constructor that creates and initialized Product objects
export class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
		this.id = Math.random().toString(16).slice(2);
	}
}
