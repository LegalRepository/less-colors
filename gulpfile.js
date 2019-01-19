const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');

function mincss() {
  return src('*.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(dest('./dist'))
}

function minmapcss() {
  return src('*.less')
    .pipe(less())
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename({
      extname: ".min.map.css"
    }))
    .pipe(dest('./dist'))
}

function css() {
  return src('*.less')
    .pipe(less())
    .pipe(dest('./dist'))
}

exports.css = css;
exports.mincss = mincss;
exports.default = parallel(mincss, minmapcss, css);
