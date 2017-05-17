var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
          h1(null, this.props.title)
         )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Make sure you find the best job platform'}),
    MyTitleFact({title: 'That also suits your needs'}),
    MyTitleFact({title: 'And is not too expensive'}),
    MyTitleFact({title: 'And is global, too!'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
