global.$ = require('./gulp.config')

console.info($)

$.path.tasks.forEach(task => require(task)())

for(const taskName in $.tasks) {
    $.gulp.task(taskName, $.gulp.series($.gulp.parallel(...$.tasks[taskName])))
}