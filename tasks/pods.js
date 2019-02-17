const shell = require("shelljs");

module.exports = function() {
  console.log("## Pods clean ##".bold.underline.pods);

  shell.cd("ios");

  console.log("\n* Pods Clean".pods);
  shell.exec("rm -rf Pods", { async: false });

  console.log("\n* Install Pods ".pods);
  shell.exec("bundle exec pod install", { async: false });

  shell.cd("..");
};
