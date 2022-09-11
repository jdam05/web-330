/**
 * Title: cart-component.js
 * Date: September 11, 2022
 * Author: Jamal Eddine Damir
 * Description: Class to create custom element for the shopping cart
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

class CartComponent extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
		<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
		`;
	}
}
customElements.define("cart-component", CartComponent);
