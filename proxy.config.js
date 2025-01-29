const PROXY_CONFIG = [
  {
    context: ['/articles'],
    target: 'https://justbeerapp.com/api/v8/',
    secure: true,
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
