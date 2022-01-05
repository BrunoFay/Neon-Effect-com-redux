import React, { Component } from 'react'
import { connect } from 'react-redux';

class Neon extends Component {
  neonLogical = () => {
    const { Neoncolor,neonName } = this.props
    const catchTrybe = document.getElementById('trybe')
    const catchTrybe2 = document.getElementById('trybe2')
    const catchBLur = document.getElementById('blur')
  
    /* alterar a variavel do css */
    document.body.style.setProperty('--clr-neon', `${Neoncolor}`);
    catchBLur.className='blur'
    catchBLur.innerHTML === '' ? catchBLur.innerHTML = neonName : catchBLur.innerHTML = ''
    catchTrybe.className='trybe'
    catchTrybe2.className='trybe'
  }
  render() {
    const { neonName, neonBlur } = this.props
    console.log(this.props);
    return (
      <div>
        <span id='blur'></span>
        <span id='trybe'>{neonBlur}</span>
        <a href="#" className="neon-button">{neonName}</a>
        <span id='trybe2'>{neonBlur}</span>
        <img id='lanterna' onClick={()=>this.neonLogical()} src="https://cdn.pixabay.com/photo/2021/02/09/13/33/flashlight-5998564_960_720.png" />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  neonBlur: state.neonReducer.blur,
  neonName: state.neonReducer.name,
  Neoncolor: state.neonReducer.color,
})
export default connect(mapStateToProps)(Neon)
