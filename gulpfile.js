const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');
const exec = require('child_process').exec;
const typedoc = require("gulp-typedoc");
const package = require('./package.json');

const JSON_FILES = ['package.json', 'src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['tsc'], () => {
  gulp.watch('src/**/*.ts', ['tsc']);
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('start', ['watch', 'assets'], function () {
  nodemon({
    script: 'dist/app.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  , watch: ['./dist']
  })
});

gulp.task("typedoc", function() {
    return gulp
        .src(["src/*.ts"])
        .pipe(typedoc({
            // TypeScript options (see typescript docs) 
            module: "commonjs",
            target: "es6",
            readme: "none",
 
            // Output options (see typedoc docs) 
            out: "./docs",
 
            // TypeDoc options (see typedoc docs) 
            name: package.name,
            ignoreCompilerErrors: false,
            version: true,
        }))
    ;
});

gulp.task('default', ['watch', 'assets']);