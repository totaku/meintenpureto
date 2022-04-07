import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import shorthand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            }))
        )
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpCss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        }))
        .pipe(autoPrefixer({
            grid: true,
            cascade: true
        }))
        .pipe(shorthand())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss(
            {
                compatibility: 'ie8', level: {
                    1: {
                        specialComments: 0,
                        removeEmpty: true,
                        removeWhitespace: true
                    },
                    2: {
                        mergeMedia: true,
                        removeEmpty: true,
                        removeDuplicateFontRules: true,
                        removeDuplicateMediaBlocks: true,
                        removeDuplicateRules: true,
                        removeUnusedAtRules: false
                    }
                }
            }
        ))
        .pipe(rename({ suffix: '.min' }))
        .pipe(app.gulp.dest(app.path.build.css, {sourcemaps: '.'}))
        .pipe(app.plugins.browserSync.stream());
}