import pug from 'gulp-pug';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

export const views = () => {
    return app.gulp.src(app.path.src.views)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            }))
        )
        .pipe(pug({ pretty: true }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
        .pipe(app.plugins.if(
            app.isBuild,
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js'
                    ]
                },
                output:{
                    'file': 'gulp/version.json'
                }
            }))
        )
        .pipe(app.gulp.dest(app.path.build.views))
        .pipe(app.plugins.browserSync.stream());
}