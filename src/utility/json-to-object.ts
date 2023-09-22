/**
 * Removes comments from a JSON string.
 *
 * @param {string} json - The input JSON string.
 * @returns {object} The JSON string with comments removed.
 */
const jsonPharse = (json: string): any => {
	try {
		
		if (typeof json !== 'string') throw new Error('argument is not string');

		// remove comments
		json = json.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)\s/g, (m, g) => g ? "" : m);

		// remove white space
		json = json.replace(/\s/gm, '');

		const jsObj = JSON.parse(json);

		console.log(`\x1b[32m${'JSON to JS Compile Successfull'}\x1b[0m`);

		// return clean js object
		return jsObj;
	}
	catch (error: any) {
		return console.log(`\x1b[31m${error.message}\x1b[0m`)
	}
};

export default jsonPharse;
