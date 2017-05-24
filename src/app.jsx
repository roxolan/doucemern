import React from 'react'
import { render } from 'react-dom'
import Title from './Title'

var div = React.DOM.div
var TitleFact = React.createFactory(Title)

const countries = ['USA', 'Canada', 'UK', 'Ireland']
const message = countries.map(c => `Salve ${c}!`).join(' ')
const greeting = <p>{message}</p>

var JobPlatformSummoning = (
  div(null,
    TitleFact({title: 'Make sure you find the best job platform', color: 'mediumaquamarine'}),
    TitleFact({title: 'That also suits your needs', color: 'peru'}),
    TitleFact({title: 'And is not too expensive', color: 'rebeccapurple'}),
    TitleFact({title: 'And is global, too!', color: 'turquoise'})
  )
)

render(JobPlatformSummoning, document.getElementById('app'))
render(greeting, document.getElementById('greeting'))
