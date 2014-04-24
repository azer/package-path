var path = require("path");
var fs = require("fs");

module.exports = start;

function start (filename, callback) {
  return packagePath(path.dirname(filename), callback);
}

function packagePath (dir, callback) {
  var pdir;

  fs.exists(path.join(dir, 'package.json'), function (exists) {
    if (exists) return callback(dir);

    pdir = path.join(dir, '../');

    if (dir == pdir) {
      return callback();
    }

    packagePath(pdir, callback);
  });
}
