import rsync from 'gulp-rsync';

export const ftp = () => {
    return app.gulp.src(app.path.build.ftp)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FTP',
                message: 'Error: <%= error.message %>'
            }))
        )
        .pipe(rsync({
			root: app.path.buildFolder,
			hostname: '',
			destination: '',
			include: ['*.htaccess'], // Includes files to deploy
			exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
			recursive: true,
			archive: true,
			silent: false,
			compress: true
		}));
}