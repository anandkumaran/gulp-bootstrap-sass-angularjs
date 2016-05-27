'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // ESLint
  gulp.task('eslint', () => {
    gulp.src([
      path.join('gulpfile.js'),
      path.join(dirs.source, '_scripts', '**/*.js'),
      '!' + path.join(dirs.source, '_scripts/vendor', '**/*.js')
    ])
    .pipe(browserSync.reload({stream: true, once: true}))
    .pipe(plugins.eslint({
      useEslintrc: true
    }))
    .pipe(plugins.eslint.format())
    .pipe(plugins.if(args.production, plugins.eslint.failAfterError()));
  });
}
