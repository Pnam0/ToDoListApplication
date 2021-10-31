const {src, dest} = require('gulp')

const static = function(cb){

  return src('src/static/data/*.*')
    .pipe(dest('dist/data'))
    

    cb()
}

exports.default = static