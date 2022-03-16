import React, { Component } from 'react'
import { connect } from 'react-redux'
import { neonColorAction, neonNameAction } from '../Redux/actions'
class InfoBar extends Component {
  constructor() {
    super()
    this.state = {
      NeonText: '',
      Neoncolor: ''
    }
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  sendToRedux = () => {
    const { dispatch } = this.props
    const { NeonText, Neoncolor } = this.state
    dispatch(neonColorAction(Neoncolor))
    dispatch(neonNameAction(NeonText))

  }
  enterButtonLogic = (e) => {
    if (e.charCode === 13) return this.sendToRedux()

  }

  render() {

    return (
      <div id='infoBar'>
        <input className='colorInput' name='Neoncolor' onChange={(e) => this.handleChange(e)} type='color'></input>
        <input className='nameInput' onKeyPress={(e) => this.enterButtonLogic(e)} name='NeonText' maxLength="12" onChange={(e) => this.handleChange(e)}></input>
        <button type='submit' onClick={() => this.sendToRedux()}>enviar</button>
      </div>
    )
  }
}
export default connect()(InfoBar)