var gulp   = require('gulp');
var tsc    = require('gulp-tsc');
var shell  = require('gulp-shell');
var runseq = require('run-sequence');
var mocha  = require('gulp-mocha');

var paths = {
    tscripts : { 
        src : [
            'src/**/*.ts'
        ],
        dest : './out/' 
    }
};

gulp.task('default', ['buildrun']);

// Run

gulp.task('run', shell.task([
    'node ./out/server.js'
]));

gulp.task('buildrun', function (cb) {
    runseq('build', 'run', cb);
});

// Compile

gulp.task('build', ['compile:typescript']);
gulp.task('compile:typescript', function () {
    return gulp
        .src(paths.tscripts.src)
        .pipe(tsc({
            module: "CommonJS",
            sourcemap: true,
            emitError: false
        }))
        .pipe(gulp.dest(paths.tscripts.dest));
});

gulp.task('watch', ['build'], function() {
        return gulp.watch(paths.tscripts.src, ['build']);
});

gulp.task('test', function () {
    return gulp.src('out/test/**/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});