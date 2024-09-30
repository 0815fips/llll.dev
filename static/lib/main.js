// External
import { hljs } from './external/highlight/highlight.min.js';

// Config
import { AppConfig } from "../../config/AppConfig.js";
import { StringUtil } from './StringUtil.js';

console.warn('Hey you! We don\'t use frameworks here.')
console.log(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark mode' : 'Light mode');

const highlighted = hljs.highlight('<span>Fuck off!</span>', {language: 'xml'});
console.log(highlighted)
const output = document.createElement('code');
output.innerHTML = highlighted.value;

document.body.appendChild(output);

const x = await import( '../component/code-box/CodeBox.js' );
console.log(x.CodeBox, x.CodeBox.prototype.constructor.name)

window.customElements.define( `${ AppConfig.customElementPrefix }-${ StringUtil.toKebabCase( x.CodeBox.prototype.constructor.name ) }`, x.CodeBox );

console.log(document.querySelectorAll(':not(:defined)'))