export class StringUtil {
  /** --------------------------------------------------------------------------------
  * @description Convert string to kebab-case
  * @param {string} str
  * @returns {string}
  */
  static toKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  /** --------------------------------------------------------------------------------
  * @description Convert string to camelCase
  * @param {string} str
  * @returns {string}
  */
  static toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  /** --------------------------------------------------------------------------------
  * @description Convert string to PascalCase
  * @param {string} str
  * @returns {string}
  */
  static toPascalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (str) => {
      return str.toUpperCase();
    });
  }

  /** --------------------------------------------------------------------------------
  * @description Convert string to snake_case
  * @param {string} str
  * @returns {string}
  */
  static toSnakeCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }
}
