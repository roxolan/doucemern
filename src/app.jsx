import React from 'react'
import { render } from 'react-dom'

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
          h1({style: {color: this.props.color}}, this.props.title)
         )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Make sure you find the best job platform', color: 'mediumaquamarine'}),
    MyTitleFact({title: 'That also suits your needs', color: 'peru'}),
    MyTitleFact({title: 'And is not too expensive', color: 'rebeccapurple'}),
    MyTitleFact({title: 'And is global, too!', color: 'turquoise'})
  )
)

render(MyFirstComponent, document.getElementById('app'))
