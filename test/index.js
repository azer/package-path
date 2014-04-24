var packagePath = require("../");
var test = require("prova");
var path = require("path");

test('getting the package path of a module in root directory', function (assert) {
  packagePath(path.join(__filename, '../index.js'), function (dir) {
    assert.plan(1);
    assert.equal(dir, up('../'));
  });
});

test('getting the package path of a module in a subdirectory', function (assert) {
  assert.plan(3);

  packagePath(path.join(__filename, './fixtures/foo.js'), function (dir) {
    assert.equal(dir, up('../'));
  });

  packagePath(path.join(__filename, './fixtures/bar/bar.js'), function (dir) {
    assert.equal(dir, up('../'));
  });

  packagePath(path.join(__filename, './fixtures/bar/qux/qux.js'), function (dir) {
    assert.equal(dir, up('../'));
  });
});

test('failing when there is package.json', function (assert) {
  assert.plan(1);

  packagePath('/tmp/foo.js', function (dir) {
    assert.notOk(dir);
  });
});

function up (p) {
  return path.join(path.dirname(__filename), p);
}
