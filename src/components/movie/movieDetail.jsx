import React from 'react'

//Antd
import { Button,  Icon, Spin, Alert } from 'antd';

//fetchJsonp
import fetchJsonp from 'fetch-jsonp'

export default class movieDetail extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            info:{},  //电影信息对象 
            isloding:1,
        }
    }
    componentWillMount(){
        fetchJsonp('https://douban-api.zce.now.sh/v2/movie/subject/'+this.props.match.params.id)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({
                info:data,
                isloding:0
            })
        })
    }

    render(){
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />
                Backward
            </Button>
            {this.renderList()}
        </div>
    }


    goBack = () => {
        this.props.history.go(-1)
    }

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
            return <div>
                <div style={{ textAlign:'center' }}>
                    <h1>{this.state.info.title}</h1>
                    <img src={this.state.info.images.large} alt=""/>
                </div>   
                <p style={{textIndent:'2em',lineHeight:'30px'}}>{this.state.info.summary}</p>
            </div> 
        }
    }
}