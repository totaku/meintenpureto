import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { clean } from './gulp/tasks/clean.js';
import { views } from './gulp/tasks/views.js';
import { server } from './gulp/tasks/server.js';
import { styles } from './gulp/tasks/styles.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { sprites } from './gulp/tasks/sprites.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

global.app = {
    isBuild: !process.argv.includes('--dev'),
    isDev: process.argv.includes('--dev'),
    gulp: gulp,
    path: path,
    plugins: plugins
}

function watcher() {
    gulp.watch(path.watch.views, views) // gulp.parallel(views, ftp)
    gulp.watch(path.watch.styles, styles)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

export { sprites }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(views, styles, js, images));

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);
const arc = gulp.series(build, zip, clean);
const deploy = gulp.series(build, ftp, clean);

export { dev }
export { build }
export { arc }
export { deploy }

gulp.task('default', dev);