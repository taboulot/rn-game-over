const shell = require("shelljs");

module.exports = function() {
  console.log("## Javascript clean ##".bold.underline.modules);

  console.log("\n* rm -rf node_modules".modules);
  shell.exec("rm -rf node_modules", { async: false });

  console.log("\n* yarn install".modules);
  shell.exec("yarn install", { async: false });
};
