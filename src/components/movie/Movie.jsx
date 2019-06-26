import React from 'react'

//布局相关组件
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;

//路由相关组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//movieList组件
import movieList from './moiveList.jsx'

export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <div style={{height:'100%'}}>
            <Layout style={{ height:'100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1"><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/movie/comming_soon/1'>即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/movie/top250/1'>Top 250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ paddingLeft:'1px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 10,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {/* 在 url 地址中提取参数，需要用到， this.props.match.params */}
                        <Route path="/movie/:type/:page" component={movieList}></Route>
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}