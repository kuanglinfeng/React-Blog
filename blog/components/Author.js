import { Avatar, Divider } from 'antd'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className='author-div comm-box'>
      <div>
        <Avatar size={100} src='https://upload.jianshu.io/users/upload_avatars/17962931/43843f98-318c-4ff3-9e8f-a2c9cababe89.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240' />
        <div className='author-introduction'>
            在校大学生，专注于Web前端开发，数码爱好者，喜欢电影和音乐，不定期分享编程技术和个人感悟。
            <Divider>社交账号</Divider>
            <Avatar size={28} icon='github' className='account'/>
            <Avatar size={28} icon='qq' className='account'/>
            <Avatar size={28} icon='wechat' className='account'/>
        </div>
      </div>
    </div>
  )
}

export default Author