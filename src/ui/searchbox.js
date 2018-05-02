import {
    BaseElement
}
from './base-element.js';

export class Searchbox extends BaseElement {
    constructor() {
        super();
    }

    getElementString() {
        return `
        <form action="#">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="sample3">
                <label class="mdl-textfield__label" for="sample3">Search...</label>
            </div>
        </form>
        `;
    }
}
