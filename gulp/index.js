const fs        = require('fs') /* Плагин для работы файловой системы. Встроенный в NODEJS */
const path      = './gulp/tasks'
const arrayPathFile = fs.readdirSync(path)
                            .map(file => `${path}/${file}`)


module.exports = arrayPathFile