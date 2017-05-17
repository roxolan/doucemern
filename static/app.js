'use strict';

var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
  render: function render() {
    return div(null, h1(null, 'Yob Search Platform'));
  }
});

var MyTitleFact = React.createFactory(MyTitle);

var MyFirstComponent = div(null, MyTitleFact(null), MyTitleFact(null), MyTitleFact(null), MyTitleFact(null));

ReactDOM.render(MyFirstComponent, document.getElementById('app'));