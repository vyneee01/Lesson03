import React, { Component } from 'react'

export default class NNV_EventFrom1 extends Component {
    //Hàm xử lí sự kiện
    eventHandleClick1 = ()=>{
        alert("event handle 1")
    }
    eventHandleClick2(){
        alert("Event Click 2")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>event handle</h2>
        {/* gọi hàm xử lý dữ kiện khi render */}
        <button onClick={this.eventHandleClick1()}>Click 1</button>
        <button onClick={this.eventHandleClick2()}>Click 2</button>
      </div>
    )
  }
}
