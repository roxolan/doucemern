var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render() {
    return (
      div(null,
          h1(null, 'Yob Search Platform')
         )
    )
  }
})

var MyFirstComponent = (
  div(null,
      React.createElement(MyTitle, null),
      React.createElement(MyTitle, null),
      React.createElement(MyTitle, null))
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
