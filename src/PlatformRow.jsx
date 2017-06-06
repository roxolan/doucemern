import React, { Component } from 'react'

class PlatformRow extends Component {
  render () {
    const platform = this.props.platform
    return (
      <tr>
        <td>{platform.id}</td>
        <td>{platform.created.toDateString()}</td>
        <td>{platform.title}</td>
      </tr>
    )
  }
}

export default PlatformRow
