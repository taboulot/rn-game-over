#!/usr/bin/env node

const shell = require("shelljs");
const colors = require("colors");
const JsTask = require("./tasks/javascript");
const IosTask = require("./tasks/ios");
const AndroidTask = require("./tasks/android");

colors.setTheme({
  javascript: "yellow",
  ios: "cyan",
  android: "green"
});

shell.config.verbose = true;

JsTask();
IosTask();
AndroidTask();
