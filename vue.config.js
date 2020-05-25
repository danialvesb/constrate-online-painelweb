const devServer = {
    proxy: {
        '^/api': {
            target: 'http://192.168.3.103:8000/api',
            ws: true,
            changeOrigin: true,
        },
    },
};

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer,
};
