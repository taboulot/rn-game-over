#!/usr/bin/env node

const shell = require("shelljs");
const colors = require("colors");
const jsTask = require("./tasks/javascript");
const iosTask = require("./tasks/ios");
const androidTask = require("./tasks/android");
const nodeModulesTask = require("./tasks/modules");
const podsTask = require("./tasks/pods");
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
  pods: "magenta"
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
  .option("--all", "Clear everything")
  .parse(process.argv);

const { ios, android, javascript, modules, pods, all } = program;

if (all || javascript) jsTask();
if (all || ios) iosTask();
if (all || android) androidTask();
if (all || modules) nodeModulesTask();
if (all || pods) podsTask();
