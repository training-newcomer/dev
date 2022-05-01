const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

gulp.task("default", function () {
  return gulp.watch("scss/**/*.scss", function () {
    return gulp
      .src("scss/**/*.scss", {
        base: "scss",
      })
      .pipe(sassGlob())
      .pipe(
        sass({
          outputStyle: "compressed",
        }).on("error", sass.logError)
      )
      .pipe(gulp.dest("assets/css"));
  });
});
