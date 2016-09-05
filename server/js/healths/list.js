const React = require('react');
const ReactDOM = require('react-dom');
const AskBox = require('../components').AskBox;
require('../libs/jquery.ellipsis');
$('.ellips').ellipsis({
    row:1,
    char:'…',
    callback: function() {
        console.log($(this).text());
    }
});
// ReactDOM.render(<AskBox data='' pageCount=''/>,document.querySelector('#ask_test'));

ReactDOM.render(React.createElement(AskBox, {data: data, pageCount: pageCount}),document.querySelector('#ask_test'));

// module.exports = AskBox;