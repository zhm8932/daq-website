const React = require('react');

var Pager = React.createClass({
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
            <div className="pages">
                <a href="javascript:;" onClick={this.prev} className={prevClass}><i className="icon"></i></a>
                <a href="javascript:;" onClick={this.next} className={nextClass}><i className="icon"></i></a>
            </div>
        )
    }
});

module.exports = Pager