module.exports = {
    gulp:               require('gulp'),
    GP:                 require('gulp-load-plugins')(),
    bs:                 require('browser-sync').create(),
    path: {
        server:         './app/dist', /* Откуда запустить серверу файлы для показа результата */
        tasks:          require('./gulp'),
        src: {  /* Откудо брать */
            html:       './app/src/*.{html,pug,jade}',
            css:        './app/src/style/*.scss',
            js:         './app/src/script/common.js',
            font:       './app/src/fonts/**/*.ttf',
            img:        './app/src/images/**/*.{gif,jpg,jpeg,png,webp,svg}'
        },
        dist: { /* Куда помещать */
            html:       './app/dist/',
            css:        './app/dist/style/',
            js:         './app/dist/script/',
            font:       './app/dist/fonts/',
            img:        './app/dist/images/'
        },
        watch: { /* Где смотреть */
            html:       ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            css:        './app/src/style/**/*.scss',
            js:         './app/src/script/**/*.js',
            font:       './app/src/fonts/**/*.ttf',
            img:        './app/src/images/**/*.*'
        }
    },
    Tasks() {
        const getKey = Object.keys(this.path.watch)
        return getKey
    },
    tasks: {
        get default() {
            return [...$.Tasks(), 'server', 'watch']
        },
        get build() {
            return $.Tasks()
        }
    },
}
