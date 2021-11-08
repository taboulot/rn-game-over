const shell = require("shelljs");
const DEPENDENCY_MANAGER = require("../helpers/dependencyManager");

// new versions of metro use TMPDIR as cache location
const TMP_FOLDER = process.env.TMPDIR || "/tmp/";

module.exports = function () {
  console.log("## Javascript clean ##".bold.underline.javascript);

  console.log("\n* watchman watch-del-all".javascript);
  shell.exec("watchman watch-del-all", { async: false });

  const HASTE_MAP_LOCATION = `${TMP_FOLDER}haste-*`;
  console.log(`\n* rm -rf ${HASTE_MAP_LOCATION}`.javascript);
  shell.rm("-rf", `${HASTE_MAP_LOCATION}`);

  const METRO_CACHE_LOCATION = `${TMP_FOLDER}metro-*`;
  console.log(`\n* rm -rf ${METRO_CACHE_LOCATION}`.javascript);
  shell.rm("-rf", `${METRO_CACHE_LOCATION}`);

  console.log(`\n* ${DEPENDENCY_MANAGER} clean cache`.javascript);
  shell.exec(`${DEPENDENCY_MANAGER} cache clean`, { async: false });

  console.log("\n* rm -rf ~/.rncache".javascript);
  shell.rm("-rf", "~/.rncache");
};
