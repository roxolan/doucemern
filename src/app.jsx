import React from 'react'
import { render } from 'react-dom'
import Title from './Title.jsx'

var div = React.DOM.div

var TitleFact = React.createFactory(Title)

var MyFirstComponent = (

  div(null,
    TitleFact({title: 'Make sure you find the best job platform', color: 'mediumaquamarine'}),
    TitleFact({title: 'That also suits your needs', color: 'peru'}),
    TitleFact({title: 'And is not too expensive', color: 'rebeccapurple'}),
    TitleFact({title: 'And is global, too!', color: 'turquoise'})
  )
)

render(MyFirstComponent, document.getElementById('app'))
