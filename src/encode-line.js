const { NotImplementedError } = require("../lib");

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
  const arr = str.split("");
  let count = 1;
  let currentNumber = arr[0];
  let result = "";

  for (let i = 1; i < arr.length; i++) {
    if (currentNumber === arr[i]) {
      count++;
    } else {
      count > 1
        ? (result += `${count}${currentNumber}`)
        : (result += `${currentNumber}`);

      currentNumber = arr[i];
      count = 1;
    }

    if (i === arr.length - 1) {
      count > 1
        ? (result += `${count}${currentNumber}`)
        : (result += `${currentNumber}`);
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};
