/**
 * Removes comments from a JSON string.
 *
 * @param {string} json - The input JSON string.
 * @returns {string} The JSON string with comments removed.
 */
const jsonPharse = (json:string) => {
    return json.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
};

export default jsonPharse;
