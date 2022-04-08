import del from "del";
import gulpZip from "gulp-zip";

export const zip = () => {
    del(app.path.build.zip);
    return app.gulp.src(app.path.build.all)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'ZIP',
                message: 'Error: <%= error.message %>'
            }))
        )
        .pipe (gulpZip('project.zip'))
        .pipe(app.gulp.dest(app.path.build.zip));
}