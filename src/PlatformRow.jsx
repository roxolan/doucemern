import React from 'react'

class PlatformRow extends React.Component {
  render () {
    const borderedStyle = {border: "1px solid silver", padding: 4}
    return (
      <tr>
        <td style={borderedStyle}>{this.props.platform_id}</td>
        <td style={borderedStyle}>{this.props.children}</td>
      </tr>
    )
  }
}

export default PlatformRow
