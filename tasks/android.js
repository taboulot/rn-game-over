const shell = require("shelljs");

module.exports = function() {
  console.log("\n## Android clean ##".android);

  console.log("\n* ./android/gradlew clean".android);
  shell.exec(" ./android/gradlew clean");

  console.log("\n* rm -rf android/build".android);
  shell.rm("-rf", "./android/build");

  console.log("\n* rm -rf android/app/build".android);
  shell.rm("-rf", "./android/app/build");

  console.log("\n* rm -rf android/.idea/modules.xml".android);
  shell.rm("android/.idea/modules.xml");

  console.log("\n* Delete .iml files".android);
  shell.find("android").filter(function(file) {
    if (file.match(/\.iml$/)) {
      shell.rm(file);
    }
  });
};
