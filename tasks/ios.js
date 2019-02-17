const shell = require("shelljs");

module.exports = function() {
  console.log("\n## iOS clean ##".bold.underline.ios);

  console.log("\n* rm -rf ~/Library/Developer/Xcode/DerivedData/*".ios);
  shell.rm("-rf", "~/Library/Developer/Xcode/DerivedData/*");

  console.log("\n* rm -rf ~/Library/Developer/Xcode/Archives/*".ios);
  shell.rm("-rf", "~/Library/Developer/Xcode/Archives/*");

  console.log("\n*rm -rf ./ios/build".ios);
  shell.rm("-rf", "./ios/build");
};
