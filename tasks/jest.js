const shell = require("shelljs");

module.exports = function() {
  console.log("## Jest clean ##".bold.underline.jest);

  console.log("\n* yarn jest --clearCache".jest);
  shell.exec("yarn jest --clearCache", { async: false });
};
