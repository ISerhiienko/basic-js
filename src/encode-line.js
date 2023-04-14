const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let charCount = 1;
  let encodedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      charCount++;
    } else {
      if (charCount > 1) {
        encodedStr += charCount + str[i];
      } else {
        encodedStr += str[i];
      }
      charCount = 1;
    }
  }

  return encodedStr;
}

module.exports = {
  encodeLine,
};
