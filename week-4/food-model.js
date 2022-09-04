/**
 * Title: food-model.js
 * Date: September 03, 2022
 * Author: Jamal Eddine Damir
 * Description: Class with constructor method that creates and initializing object
 *              to contain food items.
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// exported FoodModel class with constructor that creates and initialized food item object
export class FoodModel {
	constructor(id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	}
}
