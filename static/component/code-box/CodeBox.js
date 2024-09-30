import { BaseComponent } from "../BaseComponent.js";

export const CodeBoxTemplate = document.createElement('template');
CodeBoxTemplate.innerHTML = /*html*/`
<div data-bind="value" data-bind-target="data-wert">The label</div>
<code>
<slot></slot>
</code>
<output>
</output>
`;

export class CodeBox extends BaseComponent {
  constructor() {
    super();

    this._template = CodeBoxTemplate;

    this._init();
  }

  static get observedAttributes() {
    return [ 'value' ];
  }
}
