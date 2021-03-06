const pathDest = './dist';
const pathSrc = './src';

export const path = {
    root: pathDest,
    build: {
        views: pathDest,
        styles: pathDest + '/style/',
        js: pathDest + '/js/',
        images: pathDest + '/img/',
        favicon: pathDest + '/img/favicon',
        fonts: pathDest + '/fonts/',
        all: pathDest + '/**/*.*',
        zip: './arc'
    },
    src: {
        views: pathSrc + '/views/pages/*.pug',
        styles: pathSrc + '/style/main.scss',
        js: pathSrc + '/js/main.js',
        images: pathSrc + '/img/**/*.{jpg,jpeg,png,gif,webp,svg}',
        sprites: pathSrc + '/sprites/*.svg',
        favicon: pathSrc + '/favicon/favicon.svg'
    },
    watch: {
        views: pathSrc + '/views/**/*.pug',
        styles: pathSrc + '/style/**/*.scss',
        js: pathSrc + '/js/**/*.js',
        images: pathSrc + '/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}',
        favicon: pathSrc + '/favicon/favicon.svg'
    },
    clean: pathDest,
    srcFolder: pathSrc
}