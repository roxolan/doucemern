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
  constructor () {
    super()
    this.state = { platforms: platforms }

    setTimeout(this.createTestPlatform.bind(this), 2000)
  }

  createPlatform (newPlatform) {
    const newPlatforms = this.state.platforms.slice()
    newPlatform.id = this.state.platforms.length + 1
    newPlatforms.push(newPlatform)
    this.setState({ platforms: newPlatforms })
  }

  createTestPlatform () {
    this.createPlatform({
      created: new Date(),
      title: 'AngelList'
    })
  }

  render () {
    return (
      <div>
        <h1>Platform Tracker</h1>
        <PlatformFilter />
        <hr />
        <PlatformTable platforms={this.state.platforms} />
        <hr />
        <PlatformAdd />
      </div>
    )
  }
}

ReactDOM.render(<PlatformList />, contentNode)
