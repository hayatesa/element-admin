module.exports = {
  resolve: { // webpack别名，让浏览器识别路径
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': require('path').resolve('src')
    }
  }
}
