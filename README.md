# gulp-data-matter

Extracts front-matter from files using [gray-matter](https://github.com/jonschlinkert/gray-matter)
and stores it in `file.data` via [gulp-data](https://github.com/colynb/gulp-data).

## Example

```javascript
var gulp = require("gulp");
var hb = require("gulp-hb");
var dataMatter = require("gulp-data-matter");

gulp.task("handlebars", function() {
  return gulp.src("src/**/*.hbs")
    .pipe(dataMatter())
    .pipe(hb())
    .pipe(gulp.dest("dest"));
});
```

## License

MIT
