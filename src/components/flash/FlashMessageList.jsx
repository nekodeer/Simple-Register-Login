import React from 'react'
import { useSelector } from 'react-redux'
import FlashMessage from './FlashMessage'

export default function FlashMessageList(){
  // 从redux里获取数据遍历出来
//   const messages = [{
//     id:1001,
//     msgType:'success',
//     text:'Congratulation! You register is successful!'
//   },{
//     id:1002,
//     msgType:'danger',
//     text:'Fail! Please re-register!'
//   },
// ]
  const messages = useSelector((state) => state.flashMessage)
  return (
    <div className="container">
      {messages.map((message) => {
        return <FlashMessage message={message} key={message.id}/>
      })}
    </div>
  )
}
