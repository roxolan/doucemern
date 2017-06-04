import React from 'react'
import PlatformRow from './PlatformRow'

class PlatformTable extends React.Component {
  render () {
    const borderedStyle = {border: "1px solid silver", padding: 6}

    return (
      <table style={{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={borderedStyle}>Id</th>
            <th style={borderedStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <PlatformRow platform_id={1} platform_title="Indeed" />
          <PlatformRow platform_id={2} platform_title="Glassdoor" />
        </tbody>
      </table>
    )
  }
}

export default PlatformTable
