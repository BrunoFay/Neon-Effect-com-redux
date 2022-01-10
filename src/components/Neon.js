import React, { Component } from 'react'
import { connect } from 'react-redux';
import { neonFlashlight } from '../Redux/actions';

class Neon extends Component {
  constructor() {
    super()
    this.state = {
      flashlight: true
    }
  }


  neonLogical = () => {
    const { Neoncolor, neonName, dispatch } = this.props
    //const neonStart = neonName.length > 0 ? neonName : 'OPEN'
    const catchLightNeon = document.getElementById('lightNeon')
    const catchLightFlashlight = document.getElementById('lightFlashlight')
    const catchBLur = document.getElementById('blur')
    const sucessTrick = neonName === 'sucesso' ? 'Trybe' : neonName
    /* alterar a variavel do css */
    document.body.style.setProperty('--clr-neon', `${Neoncolor}`);
    catchBLur.className = 'blur'
    catchBLur.innerHTML === '' ? catchBLur.innerHTML = sucessTrick : catchBLur.innerHTML = ''
    catchLightNeon.className = 'neonLightBlur'
    catchLightFlashlight.className = 'neonLightBlur'
    this.setState(prevState => ({
      flashlight: !prevState.flashlight
    }));
    dispatch(neonFlashlight(this.state.flashlight))
  }

  render() {
    const { neonName, neonBlur, neonFlashlight } = this.props

    return (
      <main>
        <span id='blur'></span>
        <span id='lightNeon'>{neonFlashlight ? neonBlur : ''}</span>
        <a href="#"
          onMouseEnter={() => this.neonLogical()}
          onMouseOut={() => this.neonLogical()}
          className="neon-button">{neonName.length > 0 ? neonName : 'OPEN'}
        </a>
        <span id='lightFlashlight'>{neonFlashlight ? neonBlur : ''}</span>
        <img id='lanterna' onClick={() => this.neonLogical()} src="https://cdn.pixabay.com/photo/2021/02/09/13/33/flashlight-5998564_960_720.png" />
      </main>
    )
  }
}
const mapStateToProps = (state) => ({
  neonBlur: state.neonReducer.blur,
  neonName: state.neonReducer.name,
  Neoncolor: state.neonReducer.color,
  neonFlashlight: state.neonReducer.flashlight,
})
/* const mapDispatchToProps =(dispatch)=>({
  neonFlash: (state)=>dispatch(neonFlashlight(state))
}) */
export default connect(mapStateToProps)(Neon)
