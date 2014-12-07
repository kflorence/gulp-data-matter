var path = require("path");
var data = require("gulp-data");
var gm = require("gray-matter");

/**
 * Extract and parse front-matter from files using gray-matter.
 *
 * @param {Object} file Vinyl File object
 * @return Data from front matter
 */
function matter(file) {
  var parsed = gm(file.contents.toString());
  file.contents = new Buffer(parsed.content);
  return parsed.data;
}

module.exports = function() {
  return data(matter);
};
