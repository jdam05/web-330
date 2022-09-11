/**
 * Title: main-course.js
 * Date: September 07, 2022
 * Author: Jamal Eddine Damir
 * Description: Class with constructor method that creates and initializes object
 *              to contain main course for sale.
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// Importing product class
import { Product } from "./product.js";

// exported class with constructor that creates and initializes food item objects
export class MainCourse extends Product {
	constructor(name, price) {
		super(name, price);
	}
}
