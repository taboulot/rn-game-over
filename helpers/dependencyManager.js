const shell = require("shelljs");

const PACKAGE_LOCK_FILE = "package-lock.json";
const NPM_COMMAND = "npm";
const YARN_COMMAND = "yarn";

const getDependencyManager = function() {
  if (shell.test("-f", PACKAGE_LOCK_FILE)) {
    return NPM_COMMAND;
  } else {
    return YARN_COMMAND;
  }
};

module.exports = getDependencyManager();
