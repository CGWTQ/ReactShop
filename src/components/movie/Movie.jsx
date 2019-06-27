import React from 'react'

//布局相关组件
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;

//路由相关组件
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

//自定义组件
import movieList from './moiveList.jsx'
import movieDetail from './movieDetail.jsx'

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
                        defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="in_theaters"><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
                        <Menu.Item key="coming_soon"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
                        <Menu.Item key="top250"><Link to='/movie/top250/1'>Top 250</Link></Menu.Item>
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
                        <Switch>
                            {/* switch 如果前面的路由有限匹配成功，则放弃匹配后续路由 */}
                            <Route path='/movie/detail/:id' component={movieDetail}></Route>
                            <Route path="/movie/:type/:page" component={movieList}></Route>
                        </Switch>
                        
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}