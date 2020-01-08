const path = require('path');
const fs = require('fs');

// eslint-disable-next-line security/detect-non-literal-fs-filename
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
    src: resolveApp('src'),
    ui: resolveApp('src/ui'),
    mocks: resolveApp('src/mocks'),
    utils: resolveApp('src/utils'),
    features: resolveApp('src/features'),
    structures: resolveApp('src/structures'),
    publicPath: '/static/',
};

paths.resolveModules = [
    paths.srcClient,
    paths.srcServer,
    paths.srcShared,
    paths.src,
    'node_modules',
];

module.exports = paths;
