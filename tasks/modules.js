const shell = require("shelljs");
const DEPENDENCY_MANAGER = require("../helpers/dependencyManager");

module.exports = function({ install }) {
  console.log("## Javascript clean ##".bold.underline.modules);

  console.log("\n* rm -rf node_modules".modules);
  shell.exec("rm -rf node_modules", { async: false });

  if (install) {
    console.log(`\n* ${DEPENDENCY_MANAGER} install`.modules);
    shell.exec(`${DEPENDENCY_MANAGER} install`, { async: false });
  }
};
