const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/comments',
    createProxyMiddleware({
      target: 'https://www.reddit.com',
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/comments': '/r/all/comments.json?limit=25',
      },
    })
  );
};
