import axios from "axios";

//这里只是网络请求，并没有dispatch网redux里操作数据
export const signUpRequest = (userData) => {
   return (dispatch) => {
     return axios.post("/api/users",userData)
    //  .then(
    //    (res) => {
    //      dispatch({type:'pass',data:res.data})
    //     },
    //    ({response}) => dispatch({type:'error',data:response.data}))
   }
}

export const userCheckUserRequest = (username)=>{
  return (dispatch) =>{
    return axios.get('/api/users/' + username)
  } 
}