var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlReplace = require('gulp-html-replace');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('deploy', function(callback) {
    runSequence('cleanDist',
        'concatAndUglifyJS',
        'replaceJsWithMinified',
        'minifyCSS',
        'minifyImages',
        'copyOtherFiles',
        callback);
});

gulp.task('copyOtherFiles', function() {
    gulp.src(['src/fonts', 'src/php', 'src/favicon.png', 'src/robots.txt', 'src/sitemap.xml'])
        .pipe(gulp.dest('dist'));
});

gulp.task('cleanDist', function() {
    del("dist/*");
});

gulp.task('concatAndUglifyJS', function() {
    return gulp.src(['src/js/waiting-anim.js', 'src/js/flip.js', 'src/js/contact.js', 'src/js/overlay.js', 'src/js/sparkle-spawn.js', 'src/js/cosmos-lab.js'])
        .pipe(concat('cosmoslab.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyCSS', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('replaceJsWithMinified', function() {
    gulp.src('src/index.html')
        .pipe(htmlReplace({
            'js': 'js/cosmoslab.min.js'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyImages', () =>
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);