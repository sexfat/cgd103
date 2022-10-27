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
