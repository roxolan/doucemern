'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h1 = _react2.default.DOM.h1;
var div = _react2.default.DOM.div;

var Title = _react2.default.createClass({
  displayName: 'Title',
  render: function render() {
    return div(null, h1({ style: { color: this.props.color } }, this.props.title));
  }
});

exports.default = Title;