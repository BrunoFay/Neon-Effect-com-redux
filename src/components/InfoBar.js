import React, { Component } from 'react'
import { connect } from 'react-redux'

 class InfoBar extends Component {
  render() {
    return (
      <div>
        <input ></input>
        <select>
        <option>laranja</option>
        <option>laranja</option>
        <option>laranja</option>
        <option>laranja</option>
        <option>laranja</option>
        <option>laranja</option>
        </select>        
      </div>
    )
  }
}
export default connect()(InfoBar)