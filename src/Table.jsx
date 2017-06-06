import React, { Component } from 'react'
import PlatformRow from './PlatformRow'

class PlatformTable extends Component {
  render () {
    const platformRows = this.props.platforms.map(platform => <PlatformRow key={platform.id} platform={platform} />)

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{platformRows}</tbody>
      </table>
    )
  }
}

export default PlatformTable
