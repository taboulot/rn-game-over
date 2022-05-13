const shell = require("shelljs");

module.exports = function({ install }) {
  console.log("## Pods clean ##".bold.underline.pods);

  shell.cd("ios");

  console.log("\n* Pods Clean".pods);
  shell.exec("rm -rf Pods", { async: false });

  if (install) {
    console.log("\n* Install Pods ".pods);
    shell.exec("bundle exec pod install", { async: false });
  }

  shell.cd("..");
};
