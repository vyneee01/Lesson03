import React, { Component } from 'react'

export default class NNV_EventFrom3 extends Component {

    //su ly su kien voi props,state
    constructor(props){
        super(props);
        this.state = {
            name : 'Nguyễn Ngọc Vỹ',
            job:"Dev soft"
        }
    }
    handleChangedname = ()=>{
        this.setS({
            name:"K22CNT-ReactJS"
        })
    }
    handleChangedjob = ()=>{
        this.setS({
            job:"Quản lý sản phẩm"
        })
    }

  render() {
    return (
      <div className='alert alert-primate'>
        <h1>Event From Demo</h1>
        <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangedname}>Thay đổi name</button>
        <button onClick={this.handleChangedjob}>Thay đổi job</button>
        
      </div>
    )
  }
}
