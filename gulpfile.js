const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');



const rename = require('gulp-rename');

//壓縮css
const cleanCSS = require('gulp-clean-css');




//  壓縮 js
const uglify = require('gulp-uglify');


function js() {
    return src('src/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'));
}





//sass => css
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


function styleSass() {
    return src('src/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('./dist/css'));
}


exports.style = styleSass;



// html layout
const fileinclude = require('gulp-file-include');

function html() {
    return src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist'));
}


 //exports.h = html;


//  7 壓縮圖片
const imagemin = require('gulp-imagemin');

function min_images(){
    return src(['src/images/*.*' , 'src/images/**/*.*'])
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.minify = min_images;

//圖片搬家
function img(){
    return src(['src/images/*.*' , 'src/images/**/*.*']).pipe(dest('dist/images'))
 }



// js 打包 es6 -> es5

const babel = require('gulp-babel');

function babel5() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'));
}

exports.es5 = babel5;


const clean = require('gulp-clean');

function clear() {
  return src('dist' ,{ read: false ,allowEmpty: true })//不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
  .pipe(clean({force: true})); //強制刪除檔案 
}

exports.cls = clear;


const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['src/*.html' , 'src/layout/*.html' , 'src/layout/**/*.html'], html).on('change' , reload)
    watch(['src/sass/*.scss' , 'src/sass/**/*.scss'] , styleSass).on('change' , reload)
    watch(['src/images/*.*' , 'src/images/**/*.*'] , img).on('change' , reload)
    watch('src/js/*.js' , js).on('change' , reload)
    done();
}
// exports.default = browser




//開發用 
exports.default =  series(parallel(html ,styleSass ,img ,js) ,browser);


//上線用
exports.online = series(clear  , parallel( html , styleSass , min_images ,babel5)) 











