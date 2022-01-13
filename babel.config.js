const createBabelConfig = require('babel-preset-react-app');

module.exports = function (api) {
    api.cache(true);

    return createBabelConfig(api);
};
