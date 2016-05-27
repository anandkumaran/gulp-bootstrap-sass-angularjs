'use strict';

import path from 'path';
import iconFont from 'gulp-iconfont';
import nunjucks from 'gulp-nunjucks-html';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts);

  gulp.task('iconFonts', () => {
    gulp.src(path.join(dirs.source, dirs.icons, '*.svg'))
      .pipe(iconFont({
        fontName: 'dmart-icons',
        normalize: true,
        fontWeight: 1001
      }))
      .on('glyphs', (glyphs, options) => {
        gulp.src(path.join(dirs.source, '_layouts/_objects.icons.nunjucks'))
          .pipe(nunjucks({
            locals: {
              glyphs: glyphs,
              className: 'icon'
            },
            searchPaths: [path.join(dirs.source)],
            ext: '.scss'
          }).on('error', function(err) {
            plugins.util.log(err);
          }))
          .pipe(gulp.dest(path.join(dirs.source, dirs.styles)))
      })
      .pipe(gulp.dest(dest));
  });
}
