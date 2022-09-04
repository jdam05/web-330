/**
 * Title: Calorie-converter.js
 * Date: September 03, 2022
 * Author: Jamal Eddine Damir
 * Description: This JavaScript file includes a CalorieConverter Class that uses
 *              imported FoodModel class to create FoodModel objects. This class
 *              also uses a method that filters the data array and finds the food item
 *              name value that matches the str parameter.
 *              Sources:
 *              Source code from class GitHub Repository
 *              W3Schools.com
 *              Instructor provided assignment specific instructions
 */

// Importing FoodModel Class
import { FoodModel } from "./food-model.js";

// exported CalorieConverter with array populated with 6 FoodModel objects
export class CalorieConverter {
	static data = [
		new FoodModel(1007, "Egg", 78),
		new FoodModel(1008, "Apple", 95),
		new FoodModel(1009, "Hamburger", 354),
		new FoodModel(1010, "Fries", 400),
		new FoodModel(1011, "Banana", 105),
		new FoodModel(1012, "Soda", 150),
	];

	// method that filters the data array and finds the food item name value that matches the str parameter.
	static find(str) {
		return this.data.filter((dataObject) =>
			dataObject.name.toLowerCase().includes(str)
		);
	}
}
