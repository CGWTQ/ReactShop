import React from 'react'

//导入fetch-jsonp
import fetchJsonp from 'fetch-jsonp'

//导入 ui 组件
import { Spin, Alert, Pagination } from 'antd';

//自定义组件
import MovieItem from './movieItem.jsx'

export default class movieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],  //电影列表
            pageSize:12,
            total:0,
            nowPage: parseInt(props.match.params.page) || 1,
            isloding:1,  //是否正在加载
            movieType:props.match.params.type
        }
    }
    componentWillMount() {
        this.loadMovie()
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps.match)
        this.setState({
            isloding:true,
            nowPage:parseInt(nextProps.match.params.page) || 1 ,
            movieType:nextProps.match.params.type,
        },function(){
            this.loadMovie()
        })
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
            return <div>
                <div style={{ display:'flex',flexWrap:'wrap' }}>
                {this.state.movies.map(item => {
                    // console.log(item)
                    return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                })}
            </div>
            <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged} />
            </div>
            
        }
    }


    loadMovie = () => {

        const start = this.state.pageSize * (this.state.nowPage - 1)

        // const url =`http://v.juhe.cn/movie/${this.state.movieType}?key=999b22d95ec2430b615f8b831b33507b&cityid=3`

        const url =`https://douban-api.zce.now.sh/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

        fetchJsonp(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({
                isloding:false,
                movies:data.subjects,
                total:data.total,
            })
        })

        // const data = require('../../test_data/'+this.state.movieType+'.json')
        // setTimeout(() => {
        //     this.setState({
        //         isloding:false,
        //         movies:data.subjects,
        //         total:data.total,
        //     })
        // }, 1000);

    }

    //页码改变
    pageChanged = (page) => {
        this.props.history.push('/movie/'+this.state.movieType+'/'+page);
        // window.location.href = '/#/movie/'+this.state.movieType+'/'+page;
    }
}