'use strict';

import babelify from 'babelify';
import browserify from 'browserify';
import path from 'path';
import through2 from 'through2';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;

  // Browserify Task
  gulp.task('browserify', function(done) {
    return gulp.src([
        path.join(dirs.source, '**/*.js'),
        '!' + path.join(dirs.source, dirs.bower, '**/*.js'),
      ])
      .pipe(plugins.plumber())
      .pipe(through2.obj((file, enc, next) => {
        browserify(file.path)
          .transform(babelify.configure({
            optional: ['runtime']
          }))
          .bundle((err, res) => {
            if (err) { return next(err); }

            file.contents = res;
            next(null, file);
          });
      }))
      .pipe(plugins.rename(function(path) {
        // Remove 'source' directory as well as prefixed folder underscores
        // Ex: 'src/_scripts' --> '/scripts'
        path.dirname = path.dirname.replace('_', '');
      }))
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(dirs.temporary))
      .pipe(browserSync.reload({stream: true}));
  });
}
