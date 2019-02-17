const shell = require("shelljs");

module.exports = function() {
  console.log("\n## Android clean ##".bold.underline.android);

  console.log("\n* ./android/gradlew clean".android);
  shell.exec(" ./android/gradlew clean");

  console.log("\n* rm -rf android/build".android);
  shell.rm("-rf", "./android/build");

  console.log("\n* rm -rf android/app/build".android);
  shell.rm("-rf", "./android/app/build");

  console.log("\n* rm -rf android/.idea/modules.xml".android);
  shell.rm("android/.idea/modules.xml");

  console.log("\n* Delete .iml files".android);
  imlFiles = shell.find("android") || [];
  if (imlFiles.code !== 1) {
    imlFiles.filter(function(file) {
      if (file.match(/\.iml$/)) {
        shell.rm(file);
      }
    });
  }
};
