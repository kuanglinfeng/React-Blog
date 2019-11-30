'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    let result = await this.app.mysql.get('blog_content', {})
    console.log(result);
    
    const { ctx } = this
    ctx.body = result
  }
}

module.exports = HomeController
