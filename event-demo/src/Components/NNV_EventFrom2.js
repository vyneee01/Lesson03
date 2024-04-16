import React from 'react'

export default function NNV_EventFrom2() {
    //Định nghĩa các hàm sử lí dữ kiện
    const eventHandleClick1 = (content)=>{
        console.log('====================================');
        console.log(content);
        console.log('====================================');
    }
  return (
    <div className='alert alert-success'>
        <h2>Event demo - Function Component</h2>
        <button onClick={eventHandleClick1("Nguyen Ngoc Vy")}>Khi gọi render</button>
        <button onCanPlay={()=>eventHandleClick1("K22CNT-React")}>kHI GỌI Click</button>

    </div>
  )
}
