'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Title = require('./Title.jsx');

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var div = _react2.default.DOM.div;
var TitleFact = _react2.default.createFactory(_Title2.default);

var countries = ['USA', 'Canada', 'UK', 'Ireland'];
var message = countries.map(function (c) {
  return 'Salve ' + c + '!';
}).join(' ');
var greeting = _react2.default.createElement(
  'p',
  null,
  message
);

var JobPlatformSummoning = div(null, TitleFact({ title: 'Make sure you find the best job platform', color: 'mediumaquamarine' }), TitleFact({ title: 'That also suits your needs', color: 'peru' }), TitleFact({ title: 'And is not too expensive', color: 'rebeccapurple' }), TitleFact({ title: 'And is global, too!', color: 'turquoise' }));

(0, _reactDom.render)(JobPlatformSummoning, document.getElementById('app'));
(0, _reactDom.render)(greeting, document.getElementById('greeting'));