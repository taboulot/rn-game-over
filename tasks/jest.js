const shell = require("shelljs");
const DEPENDENCY_MANAGER = require("../helpers/dependencyManager");

module.exports = function() {
  console.log("## Jest clean ##".bold.underline.jest);

  console.log(`\n* ${DEPENDENCY_MANAGER} jest --clearCache`.jest);
  shell.exec(`${DEPENDENCY_MANAGER} jest --clearCache`, { async: false });
};
