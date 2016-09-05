const React = require('react');

var Pager = React.createClass({displayName: "Pager",
    currentPage:function () {
        // console.log('当前页属性:',this.props);
        return this.props.currentPage
    },
    prev:function () {

        var currentPage = this.currentPage();
        currentPage--;
        // console.log('上一页:',currentPage);
        this.props.getData(currentPage)
    },
    next:function () {

        var currentPage = this.currentPage()
        currentPage++;
        // console.log('下一页:',currentPage)
        this.props.getData(currentPage)
    },
    render:function () {
        var prevClass='prev disable';
        var nextClass='next';
        var currentPage = this.currentPage();
        if(currentPage>1){
            prevClass='prev';
        }
        if (currentPage==this.props.pageCount){
            nextClass='next disable'
        }
        return (
            React.createElement("div", {className: "pages"}, 
                React.createElement("a", {href: "javascript:;", onClick: this.prev, className: prevClass}, React.createElement("i", {className: "icon"})), 
                React.createElement("a", {href: "javascript:;", onClick: this.next, className: nextClass}, React.createElement("i", {className: "icon"}))
            )
        )
    }
});

module.exports = Pager