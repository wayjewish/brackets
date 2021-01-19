module.exports = function check(str, bracketsConfig) {
  let strRemoveBrackets = str;
 	let foundBrackets = false;

	bracketsConfig.forEach((arrBrackets) => {
		let brackets = `${arrBrackets[0]}${arrBrackets[1]}`;

		if (strRemoveBrackets.indexOf(brackets) !== -1) {
			foundBrackets = true;
			strRemoveBrackets = strRemoveBrackets.replace(brackets, '');
			//console.log(brackets, strRemoveBrackets);
		}
	});

	if (strRemoveBrackets && foundBrackets) return check(strRemoveBrackets, bracketsConfig);
	if (strRemoveBrackets && !foundBrackets) return false;
	if (!strRemoveBrackets) return true; 
}
