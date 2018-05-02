import {
    BaseElement
}
from './base-element.js';

export class Button extends BaseElement {
    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {
        return `
        <!-- Raiseds button with ripple -->
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        ${this.title}!!
        </button>
        `;
    }
}
