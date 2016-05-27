'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {
      // Styles
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
        path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], ['sass']);

      // Scripts
      gulp.watch([
        path.join(dirs.source, '**/*.js')
      ], ['eslint', 'browserify']);

      // Nunjucks Templates
      gulp.watch([
        path.join(dirs.source, '**/*.nunjucks'),
        path.join(dirs.source, dirs.data, '**/*.json')
      ], ['nunjucks']);


      // Copy
      gulp.watch([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(dirs.source, '**/*.nunjucks')
      ], ['copy']);

      // Images
      gulp.watch([
        path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // Icons
      gulp.watch([
        path.join(dirs.source, dirs.icons, '**/*.svg')
      ], ['iconFonts']);

      // All other files
      gulp.watch([
        path.join(dirs.temporary, '**/*')
      ]).on('change', browserSync.reload);
    }
  });
}
