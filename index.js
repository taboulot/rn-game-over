const shell = require("shelljs");

/**
 * Config
 */
shell.config.verbose = true;

/**
 * JS
 */
shell.exec("watchman watch-del-all", { async: false });
shell.rm("-rf", "/tmp/haste-map-react-native-packager-*");
shell.rm("-rf", "/tmp/metro-bundler-cache-*");
shell.exec("yarn cache clean", { async: false });
shell.rm("-rf", "~/.rncache");

/**
 * iOS
 */
shell.rm("-rf", "~/Library/Developer/Xcode/DerivedData/*");
shell.rm("-rf", "~/Library/Developer/Xcode/Archives/*");
shell.rm("-rf", "./ios/build");

/**
 * Android
 */
shell.exec(" ./android/gradlew clean");
shell.rm("-rf", "./android/build");
shell.rm("-rf", "./android/app/build");
shell.rm("android/.idea/modules.xml");
shell.rm("android/.idea/modules.xml");
shell.find("android").filter(function(file) {
  if (file.match(/\.iml$/)) {
    shell.rm(file);
  }
});
