import React, { Component } from 'react'
import { connect } from 'react-redux'
import {neonColorAction,neonNameAction} from '../Redux/actions'
 class InfoBar extends Component {
   constructor(){
     super()
     this.state = {
       NeonText:'',
       Neoncolor:''
     }
   }
  handleChange=({ target })=> {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  sendToRedux=()=>{
    const {dispatch} = this.props
    const {NeonText,Neoncolor} = this.state
    dispatch(neonColorAction(Neoncolor))
    dispatch(neonNameAction(NeonText))
   
  }

  render() {
    console.log(this.props);
    return (
      <div id='infoBar'>
        <input name='NeonText' onChange={(e)=>this.handleChange(e)}></input>
        <button type='submit'onClick={()=>this.sendToRedux()}>enviar</button>
        <select name ='Neoncolor' onChange={(e)=>this.handleChange(e)}>
        <option value='orange'>laranja</option>
        <option value='blue'>laranja</option>
        <option value='hotpink'>laranja</option>
        <option value='green'>laranja</option>
        <option value='hotblue'>laranja</option>
        <option value='white'>laranja</option>
        </select>        
      </div>
    )
  }
}
export default connect()(InfoBar)