# gulp-data-matter

Extracts front-matter from files using [https://github.com/jonschlinkert/gray-matter](gray-matter)
and stores it in `file.data` via [https://github.com/colynb/gulp-data](gulp-data).

## Example

```javascript
var gulp = require("gulp");
var hb = require("gulp-hb");
var dataMatter = require("gulp-data-matter");

gulp.task("front-matter", function() {
  return gulp.src("src/**/*.hbs")
    .pipe(dataMatter())
    .pipe(hb())
    .pipe(gulp.dest("dest"));
});
```

## License

MIT
