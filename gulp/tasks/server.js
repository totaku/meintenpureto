export const server = (done) => {
    app.plugins.browserSync.init({
        server: { baseDir: app.path.build.html},
        notify: false,
        open: true,
        cors: true,
        browser: "FirefoxDeveloperEdition",
        port: 3000
    });
}