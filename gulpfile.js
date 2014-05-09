var gulp = require('gulp'),
    ngHtml2Js = require("gulp-ng-html2js"),
    minifyHtml = require("gulp-minify-html"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    es = require('event-stream'),
    package = require('./package.json');

gulp.task('build', function () {

    var html2Js = gulp.src(["src/*.html"])
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: package.moduleName
        }));
    es.merge(html2Js, gulp.src(["src/*.js"]))
        .pipe(concat(package.directiveName + ".js"))
        .pipe(gulp.dest('dist'))
        .pipe(rename(package.directiveName + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);