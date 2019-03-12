module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 必须清除已有的所有 loader，否则接下来的loader会附加在该规则现有的loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  resolve: { // webpack别名，让浏览器识别路径
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': require('path').resolve('src')
    }
  }
}
