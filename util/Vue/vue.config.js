module.exports = {
  baseUrl : './',
  devServer: {
    // NOTE: 在命令里输入 ipconfig 得到当前电脑的 ip 改成 host => 电脑和手机在同一无线下, 即可用手机调试页面
    host: '192.168.1.85',
    // 测试的时候 本地的服务器域名
    proxy: 'http://47.107.80.215:8080/'
  }
}