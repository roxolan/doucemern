import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PlatformFilter from './Filter'
import PlatformTable from './Table'
import PlatformAdd from './Add'

const contentNode = document.getElementById('contents')

class PlatformList extends Component {
  render () {
    return (
      <div>
        <h1>Platform Tracker</h1>
        <PlatformFilter />
        <hr />
        <PlatformTable />
        <hr />
        <PlatformAdd />
      </div>
    )
  }
}

ReactDOM.render(<PlatformList />, contentNode)
