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

  render() {
    
    return (
      <div id='infoBar'>
        
        <select name='Neoncolor' onChange={(e) => this.handleChange(e)}>
          <option value='rgb(50, 153, 153)'>Azul</option>
          <option value='orange'>Laranja</option>
          <option value='blue'>Roxo</option>
          <option value='hotpink'>Rosa</option>
          <option value='green'>Verde</option>
          <option value='red'>Vermelho</option>
          <option value='white'>Branco</option>
        </select>
        <input name='NeonText' maxLength="12" onChange={(e) => this.handleChange(e)}></input>
        <button type='submit' onClick={() => this.sendToRedux()}>enviar</button>
      </div>
    )
  }
}
export default connect()(InfoBar)