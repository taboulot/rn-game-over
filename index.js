#!/usr/bin/env node

const shell = require("shelljs");
const colors = require("colors");
const jsTask = require("./tasks/javascript");
const iosTask = require("./tasks/ios");
const androidTask = require("./tasks/android");
const nodeModulesTask = require("./tasks/modules");
const podsTask = require("./tasks/pods");
const jestTask = require("./tasks/jest");
const PKG = require("./package.json");
const program = require("commander");

/**
 *  Color theme
 */
colors.setTheme({
  javascript: "yellow",
  ios: "cyan",
  android: "green",
  modules: "blue",
  pods: "magenta",
  jest: "magenta"
});

/**
 * ShellJs configuration
 */
shell.config.verbose = true;

program
  .version(PKG.version, "-v, --version")
  .option("-o, --ios", "Clear iOS")
  .option("-a, --android", "Clear Android")
  .option("-j, --javascript", "Clear Javascript")
  .option("-m, --modules", "Clear and install fresh node modules")
  .option("-p, --pods", "Clear and install fresh pods")
  .option("-c, --jest", "Clear jest cache")
  .option("--all", "Clear everything")
  .option("--no-install", "Disable node modules & pods installation")
  .parse(process.argv);

if (process.argv.length === 2) {
  console.log("You must specify one argument.");
  console.log("For help, use --help");
}

const { ios, android, javascript, modules, pods, jest, all, install } = program;

if (all || javascript) jsTask();
if (all || ios) iosTask();
if (all || android) androidTask();
if (all || modules) nodeModulesTask({ install });
if (all || pods) podsTask({ install });
if (all || jest) jestTask();
