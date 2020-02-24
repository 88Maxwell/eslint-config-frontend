module.exports = {
    extends: [
        './rules/base',
        './rules/airbnb',
        ].map(require.resolve),
    rules: {},
};
