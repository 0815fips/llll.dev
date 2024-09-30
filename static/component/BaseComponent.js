/** --------------------------------------------------------------------------------
* @typedef {Object} AttributeChangeBinding
* @property {HTMLElement} element
* @property {string} targetAttribute
*/

export class BaseComponent extends HTMLElement {
  /** @type {HTMLTemplateElement|undefined} */ _template;
  /** @type {Map<string, Array<AttributeChangeBinding>>} */ #boundAttributes = new Map();

  /** --------------------------------------------------------------------------------
  * @description Constructor
  */
  constructor() {
    super();
  }

  _init() {
    if( this._template ) {
      this.attachShadow( { mode: 'open' } ).appendChild( this._template.content.cloneNode( true ) );
      this._template = undefined;

      this.#parseTemplate( this.shadowRoot );
    }
  }

  /** --------------------------------------------------------------------------------
  * [platform-standard] @description Called when an attribute changes
  * @param {string} attributeName
  * @param {string} oldValue
  * @param {string} newValue
  */
  attributeChangedCallback( attributeName, oldValue, newValue ) {
    console.log(1, this.#boundAttributes)
    if( this.#boundAttributes.has( attributeName ) ) {
    console.log(2)
      this.#boundAttributes.get( attributeName )?.forEach( binding => {
    console.log(3)
          if( binding.element.getAttribute( binding.targetAttribute ) != newValue ) {
    console.log(4)
            binding.element.setAttribute( binding.targetAttribute, newValue );
          }
        });
    }
  }

  /** --------------------------------------------------------------------------------
  * @description Parse the template
  * @param {ShadowRoot} template
  * @returns {void}
  */
  #parseTemplate( template ) {
    if( ! template ) {
      return;
    }
console.warn(template);
    /** @type {NodeListOf<HTMLElement>} */ ( template.querySelectorAll( '[ data-bind ]' ) ).forEach( element => {
      const sourceAttribute = element.getAttribute( 'data-bind' ) ?? '';
      const targetAttribute = element.getAttribute( 'data-bind-target' ) ?? '';
      if( sourceAttribute.length > 0 && targetAttribute.length > 0 ) {
        /** @type {AttributeChangeBinding} */ const attributeChangeBinding = { element, targetAttribute };
        if( ! this.#boundAttributes.has( sourceAttribute ) ) {
          this.#boundAttributes.set( sourceAttribute, [ attributeChangeBinding ] );
        }
        else {
          this.#boundAttributes.get( sourceAttribute )?.push( attributeChangeBinding );
        }
      }
    });
  }
}
