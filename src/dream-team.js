const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const filteredString = members.filter((m) => typeof m === "string");
  if (filteredString.length === 0) return false;

  return filteredString
    .map((m) => m.toUpperCase().trim())
    .sort()
    .map((mem) => mem[0])
    .join("");
}

module.exports = {
  createDreamTeam,
};
