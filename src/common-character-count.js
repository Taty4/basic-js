const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split("");
  let arr2 = s2.split("");

  const res = arr1.filter((el) => {
    const ind = arr2.indexOf(el);

    if (ind !== -1) {
      arr2 = arr2.filter((el, index) => index !== ind);
      return true;
    }

    return false;
  });

  return res.length;
}

module.exports = {
  getCommonCharacterCount,
};
