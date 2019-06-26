import React from 'react'

//导入 ui 组件
import { Spin, Alert } from 'antd';

export default class movieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],  //电影列表
            nowPage: parseInt(props.match.params.page) || 0,
            isloding:1,  //是否正在加载
        }
    }
    componentWillMount() {
        fetch()  //url 地址  
            .then(   //response对象

            )
            .then(  //数据

            )
    }

    render() {
        return <div>
            {this.renderList()}
            
        </div>
    }

    //渲染电影列表
    renderList = () => {
        if( this.state.isloding ){
            return <Spin tip="Loading...">
            <Alert
                message="正在请求电影数据"
                description="精彩内容，马上呈现......"
                type="info"
            />
        </Spin>
        }else{
            return <div>movie</div>
        }
    }
}