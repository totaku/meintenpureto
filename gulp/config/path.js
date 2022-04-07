import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: buildFolder,
        css: buildFolder + '/css/',
        js: buildFolder + '/js/',
        images: buildFolder + '/img/',
        fonts: buildFolder + '/fonts/'
    },
    src: {
        html: srcFolder + '/*.html',
        scss: srcFolder + '/scss/style.scss',
        js: srcFolder + '/js/app.js',
        images: srcFolder + '/img/**/*.{jpg,jpeg,png,gif,webp,svg}',
        fonts: srcFolder + '/fonts/*.{eot,ttf,otc,ttc,woff,woff2,otf,svg}'
    },
    watch: {
        html: srcFolder + '/**/*.html',
        scss: srcFolder + '/scss/**/*.scss',
        js: srcFolder + '/js/**/*.js',
        images: srcFolder + '/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}',
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}