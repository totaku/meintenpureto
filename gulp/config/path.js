const pathDest = './dist';
const pathSrc = './src';

export const path = {
    root: pathDest,
    build: {
        views: pathDest,
        styles: pathDest + '/css/',
        js: pathDest + '/js/',
        images: pathDest + '/img/',
        fonts: pathDest + '/fonts/',
        all: pathDest + '/**/*.*',
        zip: './arc'
    },
    src: {
        views: [pathSrc + '/views/*.pug', pathSrc + '/views/pages/*.pug'],
        styles: pathSrc + '/style/main.scss',
        js: pathSrc + '/js/app.js',
        images: pathSrc + '/img/**/*.{jpg,jpeg,png,gif,webp,svg}',
        svgicons: pathSrc + '/svgicons/*.svg'
    },
    watch: {
        views: pathSrc + '/views/**/*.pug',
        styles: pathSrc + '/style/**/*.scss',
        js: pathSrc + '/js/**/*.js',
        images: pathSrc + '/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}',
    },
    clean: pathDest,
    srcFolder: pathSrc
}