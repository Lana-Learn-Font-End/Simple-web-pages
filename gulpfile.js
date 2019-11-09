const {src, dest, parallel} = require("gulp");
const pug = require("gulp-pug");

function pugBuild(cb) {
    src(["./src/templates/*.pug", "!./src/templates/*.layout.pug"])
        .pipe(pug())
        .pipe(dest("./src/templates"));
    cb();
}

function copyExcludeTemplate(cb) {
    src(["./src/**/*", "!./src/templates/*"])
        .pipe(dest("./dist"));
    cb();
}

function pugDist(cb) {
    src(["./src/templates/*.pug", "!./src/templates/*.layout.pug"])
        .pipe(pug())
        .pipe(dest("./dist/templates"));
    cb();
}

module.exports = {
    build: pugBuild,
    dist: parallel(copyExcludeTemplate, pugDist)
};
