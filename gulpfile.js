require("@syncfusion/ej2-sample-helpers");

var fs = require('fs');
var glob = require('glob');
var runSequence = require('run-sequence');
// var build = require("@syncfusion/ej2-build");
var gulp = require("gulp");
var webpack = require("webpack");

var shelljs = global.shelljs = global.shelljs || require('shelljs');
// var common = require("./node_modules/@syncfusion/ej2-build/src/utils/common.js");
// var isReleaseBranch = /^((release\/|hotfix\/))/g.test(process.env.BRANCH_NAME);

gulp.task('styles', function() {
    var sass = require('gulp-sass');
    return gulp.src(['./src/assets/**/*.scss'], { base: './' })
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: './node_modules/@syncfusion/'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('build', function(done) {
    shelljs.exec('npm run build', function (exitCode) {
        done(exitCode);
    })
    runSequence('styles');
});

gulp.task('serve', ['build'], function (done) {
    var browserSync = require('browser-sync');
    var bs = browserSync.create('Essential TypeScript');
    var options = {
        server: {
            baseDir: './src'
        },
        ui: false
    };
    bs.init(options, done);
});

gulp.task('clear-all', function () {
  return gulp.src(['src/**/*.js.map', 'src/**/*.json', 'src/**/*.js', 'src/**/*.d.ts', 'src/**/*.ngfactory.ts', 'src/**/*.ngstyle.ts']).pipe(clean({
    force: true
  }))
});
