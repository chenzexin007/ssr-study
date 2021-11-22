/**
 * 1.搭建express服务器
 * 2.使用 vue-server-renderer 把模板和数据处理成静态模板html
 * 3.使用 send 返回静态模板给 浏览器 解析处理
 */
const server = require('express')()
server.get('/index', (req, res) => {
  // 第一步创建Vue实例
  const Vue = require('vue')
  const app = new Vue({
    template: `<div>hello</div>`
  })
  // 创建renderer
  const renderer = require('vue-server-renderer').createRenderer()
  // 服务端渲染模板数据完，返回给浏览器解析
  renderer.renderToString(app).then(html => {
    res.send(html)
  }).catch(err => {
    res.send(err)
  })
})


server.listen('3001')