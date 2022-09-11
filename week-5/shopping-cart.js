/**
 * Title: shopping-cart.js
 * Date: September 11, 2022
 * Author: Jamal Eddine Damir
 * Description: Class to add and count shopping cart items
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

/* exported ShoppingCart class with constructor 
that creates a property for products and assigns it to empty array */
export class ShoppingCart {
	constructor() {
		this.products = [];
	}

	// Class method that counts the length of the products array
	count() {
		return this.products.length;
	}

	// Class method that adds new products to products array
	add(product) {
		this.products.push(product);
	}

	// Generator yielding products objects through iteration
	*iterate() {
		for (const product of this.products) {
			yield product;
		}
	}
}
