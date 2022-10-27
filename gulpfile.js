const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


function defaultTask(cb){
   console.log('gulp 成功');
   cb(); 
}

exports.c = defaultTask;



// taskA
function A(cb){
  console.log('a mission');
  cb();
}

//taskB 
function B(cb){
    console.log('b mission');
    cb();
}


exports.sync = series(A , B); 
exports.async = parallel(A , B);

// 以上使用在最後打包的流程控管


function file(){
  return src(['src/*.html' , 'src/*.css' , 'src/**/*.js' , '!src/about.html'])
  .pipe(dest('dist/')) // 打包兩種不同檔案格式  !排除  **下一層目錄
}

exports.f = file;


//壓縮css
const cleanCSS = require('gulp-clean-css');

function cssminify(){
  return src('src/*.css').pipe(cleanCSS()).pipe(dest('dist/css'))
}


exports.css = cssminify


