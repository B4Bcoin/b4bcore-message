'use strict';

var gulp = require('gulp');
var b4bcoreTasks = require('b4bcore-build');

b4bcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
