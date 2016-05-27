'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Clean
  gulp.task('assets', ['nunjucks', 'sass', 'browserify'], ()=> {
    let assets = plugins.useref.assets({
      searchPath: [
        path.join(dirs.temporary),
        path.join(dirs.source),
        path.join(dirs.destination),
        path.join(dirs.bower),
        '.'
      ]
    });

    return gulp.src(path.join(dirs.destination, '**/*.html'))
      .pipe(assets)
      .pipe(gulpif('*.js', plugins.uglify()))
      .pipe(gulpif('*.css', plugins.minifyCss()))
      .pipe(assets.restore())
      .pipe(plugins.useref())
      // .pipe(plugins.print())
      .pipe(gulp.dest(path.join(taskTarget)));
  });
}
