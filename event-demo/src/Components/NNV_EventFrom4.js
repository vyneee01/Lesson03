import React, { Component } from 'react'

export default class NNV_EventFrom4 extends Component {
    constructor(props){
        super(props);
    }
    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>lấy dữ liệu từ props</h2>
        <button onClick={this.handleGetName}>Lấy tên</button>
        <h2>Welcom to {this.props.name}</h2>
      </div>
    )
  }
}
