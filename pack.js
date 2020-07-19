const packager = require("electron-packager");
const package = require("./package.json");
const { name, version } = package;
const path = require("path");
const icoPath = path.join(__dirname, "frontend", "public", "favicon.ico");
const distPath = path.join(__dirname, "dist");

const options = {
  arch: "x64",
  platform: "darwin",
  dir: distPath,
  "app-copyright": "Narongsak Keawmanee",
  "app-version": version,
  asar: true,
  icon: icoPath,
  name: name,
  out: name,
  overwrite: true,
  version: version,
  "version-string": {
    FileDescription: name,
    ProductName: name,
  },
};
packager(options, function done_callback(err, appPaths) {
  console.log("Error: ", err);
  console.log("appPaths: ", appPaths);
});
