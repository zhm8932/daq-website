const React = require('react');
const ReactDOM = require('react-dom');
const Pager = require('../pager');
// const request = require('request');

var AskList = React.createClass({displayName: "AskList",
    render:function () {
        // console.log("this.props:",this.props);
        var data = this.props.data;
        if(!data||!data.length>0){
            return React.createElement("p", null, "暂无数据")
        }
        return (
            React.createElement("ul", null, 
                React.createElement("h3", null, "有问有答"), 
                data.map(function (item) {
                    return (
                        React.createElement("li", {key: item.id}, 
                            React.createElement("i", {className: "icon"}), 
                            React.createElement("a", {href: "/healths/list/article/"+item.id}, item.title)
                        )
                    )
                })
            )
        )
    }
})


var AskBox = React.createClass({displayName: "AskBox",

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
    },
    render:function () {
        // console.log("renderthis.state:",this.state);
        // var data = this.state.data;
        var data = this.props.data;

        if(!data||!data.length>0){
            return React.createElement("p", null, "暂无数据")
        }

        if(this.props.pageCount==1){
            return (
                React.createElement("div", null, 
                    React.createElement(AskList, {data: this.state.data})
                )
            )
        }
        return (
            React.createElement("div", null, 
                React.createElement(AskList, {data: this.state.data}), 
                React.createElement("h5", null, this.props.pageCount), 
                React.createElement(Pager, {getData: this.getData, data: this.state.data, pageCount: this.props.pageCount, currentPage: this.state.currentPage})
            )
        )
    }
})
module.exports = AskBox;