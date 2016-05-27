'use strict';

import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';
import wrench from 'wrench';
import runSequence from 'run-sequence';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();
// Create karma server
const karma = require('karma').server;

let config = pjson.config;
let args = minimist(process.argv.slice(2));
let dirs = config.directories;
let taskTarget = args.production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
let browserSync = browserSyncLib.create();

// This will grab all js in the `gulp` directory
// in order to load all gulp tasks
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(gulp, plugins, args, config, taskTarget, browserSync);
});

// Default task
gulp.task('default', () => {
  gulp.start('build');
});

// Build production-ready code
gulp.task('build', (done) => {
  return runSequence(
    [
      'clean',
      'eslint'
    ],
    [
      'copy',
      'imagemin',
      'iconFonts',
      'nunjucks',
      'sass',
      'browserify',
      'assets'
    ],
    done);
});

// Server tasks with watch
gulp.task('serve', (cb) => {
  return runSequence([
    'imagemin',
    'copy',
    'iconFonts',
    'nunjucks',
    'sass',
    'browserify',
    'eslint'
  ], [
    'browserSync',
    'watch'
  ],
  cb);
});

// Testing
gulp.task('test', (done) => {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: !args.watch,
    autoWatch: args.watch
  }, done);
});
