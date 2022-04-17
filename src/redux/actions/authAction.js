import { SET_CURRENT_USER } from "../constant"
import axios from "axios"
import setAuthorizationToken from "../../utils/validations/setAuthorization Token"
import jwtDecode from "jwt-decode"

export const setCurrentUser = (user) =>{
  return{
    type: SET_CURRENT_USER,
    data: user
  }
}  

export const logOut = () => {
  return dispatch=>{
    localStorage.removeItem("loginToken");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}))
  }
} 

export const login = (data) => {
  return dispatch =>{
    return axios.post("/api/auth",data).then(
      (res) => {
        const token = res.data;
        localStorage.setItem("loginToken",token)
        //设置网络请求携带数据
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)))
      },
    )
  }
}