import React from 'react'
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom"

//antd布局
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

//导入scss
import style from './css/app.scss'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return <HashRouter>
        <Layout className="layout" style={{height:'730px'}}>
        <Header>
          <div className={style.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">电影</Menu.Item>
            <Menu.Item key="3">关于</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ background: '#fff' }}>
          1233
        </Content>
        <Footer style={{ textAlign: 'center' }}>CGWTQ ©2019 React Shop</Footer>
      </Layout>     
    </HashRouter>
  }
}