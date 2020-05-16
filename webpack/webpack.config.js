module.exports = env => {
    env = env || 'dev';
    console.log(`env: ${env}`);
    return require(`./webpack.config.${env}.js`)
};
