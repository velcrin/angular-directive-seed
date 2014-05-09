var gulp = require('gulp'),
    ngHtml2Js = require("gulp-ng-html2js"),
    minifyHtml = require("gulp-minify-html"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),

gulp.task('build', function () {

    gulp.src("src/*.html")
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "directiveSeed"
        }))
        .pipe(concat("directiveSeed.js"))
        .pipe(gulp.dest('dist'))
        .pipe(rename('directiveSeed.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);