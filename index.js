#!/usr/bin/env node

const shell = require("shelljs");
const colors = require("colors");

colors.setTheme({
  javascript: "yellow",
  ios: "cyan",
  android: "green"
});

/**
 * Config
 */
shell.config.verbose = true;

/**
 * JS
 */
console.log("## Javascript clean ##".javascript);
console.log("\n* watchman watch-del-all".javascript);
shell.exec("watchman watch-del-all", { async: false });
console.log("\n* rm -rf haste-map-react-native-packager-*".javascript);
shell.rm("-rf", "/tmp/haste-map-react-native-packager-*");
console.log("\n* rm -rf /tmp/metro-bundler-cache-*".javascript);
shell.rm("-rf", "/tmp/metro-bundler-cache-*");
console.log("\n* yarn clean cache".javascript);
shell.exec("yarn cache clean", { async: false });
console.log("\n* rm -rf ~/.rncache".javascript);
shell.rm("-rf", "~/.rncache");

/**
 * iOS
 */
console.log("\n## iOS clean ##".ios);
console.log("\n* rm -rf ~/Library/Developer/Xcode/DerivedData/*".ios);
shell.rm("-rf", "~/Library/Developer/Xcode/DerivedData/*");
console.log("\n* rm -rf ~/Library/Developer/Xcode/Archives/*".ios);
shell.rm("-rf", "~/Library/Developer/Xcode/Archives/*");
console.log("\n*rm -rf ./ios/build".ios);
shell.rm("-rf", "./ios/build");

/**
 * Android
 */
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
