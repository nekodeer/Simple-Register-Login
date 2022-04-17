import axios from "axios";

const setAuthorizationToken = (token) =>{
  //有token就携带，没有就说明token无效，将之前的请求里携带的authorization删除
  if(token){
    axios.defaults.headers.common['Authorization'] = token;
  }else{
    delete axios.defaults.headers.common['Authorization'];
  }
} 

export default setAuthorizationToken