const React = require('react');
const ReactDOM = require('react-dom');
const Pager = require('../pager');
// const request = require('request');

var AskList = React.createClass({
    render:function () {
        // console.log("this.props:",this.props);
        var data = this.props.data;
        if(!data||!data.length>0){
            return <p>暂无数据</p>
        }
        return (
            <ul>
                <h3>有问有答</h3>
                {data.map(function (item) {
                    return (
                        <li key={item.id}>
                            <i className="icon"></i>
                            <a href={"/healths/list/article/"+item.id}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }
})


var AskBox = React.createClass({

    // getDefaultProps:function () {
    //     return {
    //         currentPage:1
    //     }
    // },
    getInitialState:function () {
        // console.log("this.props:",this.props);
      if(this.props.data){
          return {data:this.props.data,currentPage:1}
      }
    },
    componentDidMount:function () {
        // console.log("componentDidMountthis.props:",this.props);
    },
    getData:function (currentPage) {
        var _this = this;
        var data = {
            pageIndex:currentPage
        };
        if(currentPage<1||currentPage>_this.props.pageCount){
            // console.log("不请求数据：",currentPage,_this.props.pageCount)
            return
        }

        var url = '/healths/list/list_ask_web';
        $.ajax({
            type:'post',
            url: url,
            data:data,
            success:function(json){
                // console.log("json:",json);
                if(json.success){
                    pageCount = json.data.pageCount;
                    _this.setState({
                        // pageCount:pageCount,
                        data:json.data.data,
                        currentPage:json.data.currentPage
                    })
                    // console.log("结果.state:",_this.state)
                }


            }
        })

        // request({method: 'GET', url: url, json: data}, function(error, response, body) {
        //     console.log("body:",body)
        // })
    },
    render:function () {
        // console.log("renderthis.state:",this.state);
        // var data = this.state.data;
        var data = this.props.data;

        if(!data||!data.length>0){
            return <p>暂无数据</p>
        }
        return (
            <div>
                <AskList data={this.state.data}/>
                <Pager getData={this.getData} data={this.state.data} pageCount={this.props.pageCount} currentPage={this.state.currentPage}/>

            </div>
        )
    }
})
module.exports = AskBox;