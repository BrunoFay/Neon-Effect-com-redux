import React, { Component } from 'react'
import { connect } from 'react-redux'

 class InfoBar extends Component {
  render() {
    return (
      <div id='infoBar'>
        <input></input>
        <button type='submit'>enviar</button>
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