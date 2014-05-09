var gulp = require('gulp'),
    ngHtml2Js = require("gulp-ng-html2js"),
    minifyHtml = require("gulp-minify-html"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    replace = require("gulp-replace"),
    es = require('event-stream'),
    rename = require("gulp-rename"),
    clean = require("gulp-clean");

gulp.task('build', function () {

    var jsify = gulp.src("src/*.html")
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "directiveSeed"
        }));

    var wireUp = gulp.src(['src/directive-seed.js'])
        .pipe(replace(/templateUrl/g, 'template'));

    es.merge(jsify, wireUp)
        .pipe(concat("directiveSeed.js"))
        .pipe(gulp.dest('dist'))
        .pipe(rename('directiveSeed.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);