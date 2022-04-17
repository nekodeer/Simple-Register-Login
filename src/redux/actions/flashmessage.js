import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "../constant";

//action接受message参数作为data，传递给reducer处理
export const addFlashMessage = (message) =>{
  return{
    type: ADD_FLASH_MESSAGE,
    data:message
  }
} 
export const delFlashMessage = (id) =>{
  return{
    type:DELETE_FLASH_MESSAGE,
    data:id
  }
} 