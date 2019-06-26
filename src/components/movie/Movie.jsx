import React from 'react'

import { Layout, Menu,  Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
                        <Menu.Item key="1">正在热映</Menu.Item>
                        <Menu.Item key="2">即将上映</Menu.Item>
                        <Menu.Item key="3">Top 250</Menu.Item>
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
                        Content
                    </Content>
                </Layout>
            </Layout>
            </div>
    }
}