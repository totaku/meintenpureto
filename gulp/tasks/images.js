import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'Images',
                message: 'Error: <%= error.message %>'
            }))
        )
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(app.plugins.if(app.isBuild, webp()))
        .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
        .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))
        .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
        .pipe(app.plugins.if(app.isBuild, imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.mozjpeg({
                progressive: true,
                quality: 75
            }),
            imagemin.optipng({
                speed: 5,
                quality: [0.6, 0.8]
            }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            })
        ])))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream());
}