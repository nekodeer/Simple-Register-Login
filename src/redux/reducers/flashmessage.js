import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "../constant";
import {nanoid} from "nanoid"

function flashMessage(prevState=[],action){
  const {type,data} = action
  // 这里的type是action的type即添加或删除,return的对象里的是message的type指的是消息的种类是success或danger
  switch (type) {
    case ADD_FLASH_MESSAGE:
      return [...prevState,{
        id:nanoid(),
        msgType: data.msgType,
        text: data.text
      }]
    case DELETE_FLASH_MESSAGE:
      return [...prevState].filter((message) => {
       return message.id!== data
      })
    default:
      return prevState;
  }
} 

export default flashMessage