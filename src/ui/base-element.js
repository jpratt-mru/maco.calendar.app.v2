export class BaseElement {

    constructor() {
        console.log("base element");
        this.domElement = null;
    }

    createElement() {
        let s = this.getElementString();
        this.domElement = this.element(s);
    }

    getElementString() {
        throw "Please override getElementString() from BaseElement";
    }

    appendTo(domElement) {
        this.createElement();
        domElement.appendChild(this.domElement);
        this.enableJS();
    }

    element(domstring) {
        let html = new DOMParser().parseFromString(domstring, 'text/html');
        return html.body.firstChild;
    }

    enableJS() {
        componentHandler.upgradeElement(this.domElement);
    }
}
