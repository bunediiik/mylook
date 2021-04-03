module.exports = () => 
    $.gulp.task('css', () => 
        $.gulp.src($.path.src.css)
            .pipe($.GP.sass( { outputStyle: 'expanded' } ))
            .pipe($.GP.autoprefixer())
            .pipe($.GP.groupCssMediaQueries())
            .pipe($.GP.sass( { outputStyle: 'compressed' } ))
            .pipe($.gulp.dest($.path.dist.css))
            .on('end', $.bs.reload)
    )
