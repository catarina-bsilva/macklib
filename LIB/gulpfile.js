const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    console.log('Starting buildStyles...')
    return src('index.sass')
        .pipe(sass({ outputStyle: 'expanded', sourceMap: false }).on('error', sass.logError))
        .pipe(dest('css'))
        .on('end', () => console.log('Completed buildStyles'))
}

function watchTask(done) {
    console.log('Starting watchTask...')
    watch(['index.sass'], buildStyles)
    done()
    console.log('Completed watchTask setup')
}

exports.default = series(buildStyles, watchTask)