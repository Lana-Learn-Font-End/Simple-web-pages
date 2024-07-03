const {src, dest, parallel} = require("gulp");
const pug = require("gulp-pug");

function pugBuild(cb) {
    src(["./src/*.pug", "!./src/*.layout.pug"])
        .pipe(pug())
        .pipe(dest("./src"));
    cb();
}

function copyExcludeTemplate(cb) {
    src(["./src/**/*", "!./src/*.pug"])
        .pipe(dest("./dist"));
    cb();
}

function pugDist(cb) {
    src(["./src/*.pug", "!./src/*.layout.pug"])
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest("./dist"));
    cb();
}

module.exports = {
    build: pugBuild,
    dist: parallel(copyExcludeTemplate, pugDist)
};
