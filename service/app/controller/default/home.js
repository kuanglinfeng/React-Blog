'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    ctx.body = 'api hi'
  }
  async getArticleList() {
    let sql = `SELECT blog_article.id as id  ,
    blog_article.title as title ,
    blog_article.introduce as introduce ,
    blog_article.add_time as addTime ,
    blog_article.view_count as viewCount ,
    blog_type.name as typeName FROM blog_article LEFT JOIN blog_type ON blog_article.type_id = blog_type.id`

    const results = await this.app.mysql.query(sql)

    this.ctx.body = {data: results}
  }

}

module.exports = HomeController
