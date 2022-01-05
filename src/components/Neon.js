import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Neon extends Component {
  render() {
     /*  const {neonName}=this.props */
  console.log(this.props);
    return (
      <div>
        <span id='blur'></span>
        <span id='trybe'></span>
        <a href="#" className="neon-button">{/* neonName */}</a>
        <span id='trybe2'></span>
        <img id='lanterna' src="https://cdn.pixabay.com/photo/2021/02/09/13/33/flashlight-5998564_960_720.png" />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  neonName: state.neonReducer.name
})
export default connect(mapStateToProps)(Neon)
