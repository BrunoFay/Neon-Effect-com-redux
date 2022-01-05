import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Neon extends Component {
  render() {
       const {neonName,neonBlur}=this.props 
  console.log(this.props);
    return (
      <div>
        <span id='blur'></span>
        <span id='trybe'>{neonBlur }</span>
        <a href="#" className="neon-button">{neonName}</a>
        <span id='trybe2'>{neonBlur }</span>
        <img id='lanterna' src="https://cdn.pixabay.com/photo/2021/02/09/13/33/flashlight-5998564_960_720.png" />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  neonBlur: state.neonReducer.blur,
  neonName: state.neonReducer.name
})
export default connect(mapStateToProps)(Neon)
