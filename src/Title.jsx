import React from 'react'

var h1 = React.DOM.h1
var div = React.DOM.div

class Title extends React.Component {
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
}

export default Title
