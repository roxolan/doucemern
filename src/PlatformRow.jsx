import React from 'react'

class PlatformRow extends React.Component {
  render () {
    const borderedStyle = {border: "px solid silver", padding: 4}
    return (
      <tr>
        <td style={borderedStyle}>{this.props.platform_id}</td>
        <td style={borderedStyle}>{this.props.platform_title}</td>
      </tr>
    )
  }
}

export default PlatformRow
