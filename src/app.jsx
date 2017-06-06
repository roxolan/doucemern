import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PlatformFilter from './Filter'
import PlatformTable from './Table'
import PlatformAdd from './Add'

const contentNode = document.getElementById('contents')

const platforms = [
  {
    id: 1,
    created: new Date('2017-06-04'),
    title: 'Indeed'
  },
  {
    id: 2,
    created: new Date('2017-06-04'),
    title: 'Glassdoor'
  },
  {
    id: 3,
    created: new Date('2017-06-04'),
    title: 'SimplyHired'
  }
]

class PlatformList extends Component {
  render () {
    return (
      <div>
        <h1>Platform Tracker</h1>
        <PlatformFilter />
        <hr />
        <PlatformTable platforms={platforms} />
        <hr />
        <PlatformAdd />
      </div>
    )
  }
}

ReactDOM.render(<PlatformList />, contentNode)
