// import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFlashMessage } from '../../redux/actions/flashmessage';
import validateInput from '../../utils/validations/login';
import { useNavigate } from 'react-router-dom';
// import setAuthorizationToken from '../../utils/validations/setAuthorization Token';
import { login } from '../../redux/actions/authAction';
// import jwtDecode from "jwt-decode"
// import { setCurrentUser } from '../../redux/actions/authAction';
export default function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getUsername(e) {
    setUsername(e.target.value);
  }
  function getPassword(e) {
    setPassword(e.target.value);
  }
  function isValid(){
    const {errors,isValid} = validateInput({username,password})
    //不为空说明有错误提示
    if(!isValid){
      setErrorMsg({username:errors.username,password:errors.password})
    }
    else{
      setErrorMsg({})
    }
    //为空则结果为true，将isValid结果返回
    return isValid;
  }
  function submitForm(e){
    e.preventDefault();
    setErrorMsg({});
    if(isValid()){
      //发送网络请求
      const data = {username,password}
      dispatch(login(data)).then(      
        (res)=>{
          dispatch(addFlashMessage({
            msgType:'success',
            text:"Login Success"
          }));        
          navigate('/home');
        },
        (err) => {
        setErrorMsg({loginError:err.response.data.errors})
      })
    }
  }
  // function submitForm(e){
  //   e.preventDefault();
  //   setErrorMsg({});
  //   if(isValid()){
  //     //发送网络请求
  //     const data = {username,password}
  //     axios.post("/api/auth",data).then(
  //     (res) => {
  //       const token = res.data;
  //       localStorage.setItem("loginToken",token)
  //       //设置网络请求携带数据
  //       setAuthorizationToken(token);
  //       dispatch(setCurrentUser(jwtDecode(token)))
  //       dispatch(addFlashMessage({
  //         msgType:'success',
  //         text:"Login Success"
  //       })); 
  //       navigate('/home');
  //     },
  //     (err) => {
  //       setErrorMsg({loginError:err.response.data.errors})
  //     }
  //   )
  //   }
  // }
  return (
    <form onSubmit={submitForm}>
      <h1>User Login</h1>
      <div className='mb-3'>
        <label className='form-label'>Username</label>
        <input type="text" className='form-control' onChange={getUsername}/>
        <span>{errorMsg.loginError?errorMsg.loginError:errorMsg.username}</span>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Password</label>
        <input type="password" className='form-control'onChange={getPassword}/>
        <span>{errorMsg.password}</span>
      </div>
      <div className='mb-3'>
        <button disabled={isLoading} className='btn btn-primary btn-lg'>Login</button>
      </div>
    </form>
  )
}
