import favicons from 'gulp-favicons';
import filter from 'gulp-filter';

export const favicon = () => {
    return app.gulp.src(app.path.src.favicon)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FavIcon',
                message: 'Error: <%= error.message %>'
            }))
        )
        .pipe(app.gulp.dest(app.path.build.favicon))
        .pipe(favicons({
            icons: {
                favicons: true,
                android: true,
                appleIcon: true,
                firefox: true,
                appleStartup: false,
                coast: false,
                windows: false,
                yandex: false
            },
            path: 'img/favicon/'
        }))
        .pipe(app.gulp.dest(app.path.build.favicon))
        .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json', 'manifest.webapp']))
        .pipe(app.gulp.dest(app.path.root))
        .pipe(app.plugins.browserSync.stream());
}