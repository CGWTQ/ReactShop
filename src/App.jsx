import React from 'react'
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom"

//antd布局
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

//导入scss
import style from './css/app.scss'

//导入组件
import Home from './components/home/Home.jsx'
import Movie from './components/movie/Movie.jsx'
import About from './components/about/About.jsx' 



export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return <HashRouter>
        <Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className={style.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link to='/home'>首页</Link></Menu.Item>
            <Menu.Item key="movie"><Link to='/movie/in_theaters'>电影</Link></Menu.Item>
            <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ background: '#fff' }}>
          <Route path='/home' component={Home}></Route>
          <Route path='/movie' component={Movie}></Route>
          <Route path='/about' component={About}></Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>CGWTQ ©2019 React Shop</Footer>
      </Layout>     
    </HashRouter>
  }
}