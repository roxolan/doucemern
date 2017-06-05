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
          <PlatformRow platform_id={1}>Indeed</PlatformRow>
          <PlatformRow platform_id={2}>Glassdoor</PlatformRow>
          <PlatformRow platform_id={3}>SimplyHired</PlatformRow>
        </tbody>
      </table>
    )
  }
}

export default PlatformTable
