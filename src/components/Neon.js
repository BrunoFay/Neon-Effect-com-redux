import React, { Component } from 'react'
import { connect } from 'react-redux';
import { neonFlashlight } from '../Redux/actions';
class Neon extends Component {
  constructor(){
    super()
    this.state ={
      flashlight:false
    }
  }
  neonLogical = () => {
    const { Neoncolor, neonName,neonFlash } = this.props
    const catchTrybe = document.getElementById('lightNeon')
    const catchTrybe2 = document.getElementById('lightFlashlight')
    const catchBLur = document.getElementById('blur')
    const neonStart = neonName.length > 0 ? neonName : 'OPEN'
    /* alterar a variavel do css */
    document.body.style.setProperty('--clr-neon', `${Neoncolor}`);
    catchBLur.className = 'blur'
    catchBLur.innerHTML === '' ? catchBLur.innerHTML = neonStart : catchBLur.innerHTML = ''
    catchTrybe.className = 'neonLightBlur'
    catchTrybe2.className = 'neonLightBlur'
    this.setState({
      flashlight:false?true:false
    })
    neonFlash(this.state)
  }
  render() {
    const { neonName, neonBlur,neonFlashlight } = this.props
    console.log(this.props);
    return (
      <div>
        <span id='blur'></span>
        <span id='lightNeon'>{neonFlashlight && neonBlur}</span>
        <a href="#" className="neon-button">{neonName.length > 0 ? neonName : 'OPEN'}</a>
        <span id='lightFlashlight'>{neonFlashlight && neonBlur}</span>
        <img id='lanterna' onClick={() => this.neonLogical()} src="https://cdn.pixabay.com/photo/2021/02/09/13/33/flashlight-5998564_960_720.png" />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  neonBlur: state.neonReducer.blur,
  neonName: state.neonReducer.name,
  Neoncolor: state.neonReducer.color,
  neonFlashlight: state.neonReducer.flashlight,
})
const mapDispatchToProps =(dispatch)=>({
  neonFlash: (state)=>dispatch(neonFlashlight(state))
})
export default connect(mapStateToProps,mapDispatchToProps)(Neon)
