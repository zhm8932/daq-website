const React = require('react');
const ReactDOM = require('react-dom');
const AskBox = require('../components').AskBox;

// ReactDOM.render(<AskBox data='' pageCount=''/>,document.querySelector('#ask_test'));

ReactDOM.render(<AskBox data={data} pageCount={pageCount}/>,document.querySelector('#ask_test'));

// module.exports = AskBox;