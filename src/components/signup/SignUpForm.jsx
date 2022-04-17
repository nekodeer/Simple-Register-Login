import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../redux/actions/signupAction';
import { useNavigate } from 'react-router-dom';
// import { addFlashMessage } from '../../redux/actions/flashmessage';
import *as flashMessageAction from '../../redux/actions/flashmessage'
import axios from 'axios';

export default function SignUpForm(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cfmPassword, setCfmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState({})
  const [isLoading,setIsLoading] = useState(false)

  const navigate = useNavigate();

  const dispatch = useDispatch();


  function getUsername(e) {
    setUsername(e.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }

  function getPassword(e) {
    setPassword(e.target.value);
  }

  function getCfmPassword(e) {
    setCfmPassword(e.target.value);
  }

  function checkUserExist(e){
    if(username !=='')
    {
      axios.get('/api/users/' + username).then(res=>{
        // 说明已有数据，用户名存在
        if(res.data[0]){
          setErrorMsg({username:`Username ${e.target.value} already exist, please change the username!`})
          setIsLoading(true)
        }
        else{
          setErrorMsg({});
          setIsLoading(false)
        }
      })
    }
  }
  // function checkEmailExist(e){
  //   if(email !=='')
  //   {
  //     axios.get('/api/users/' + email).then(res=>{
  //       // 说明已有数据，用户名存在
  //       console.log(res.data);
  //       if(res.data[0]){
  //         setErrorMsg({email:`Email Address ${e.target.value} already exist, please use another!`})
  //         setIsLoading(true)
  //       }
  //       else{
  //         setErrorMsg({});
  //         setIsLoading(false)
  //       }
  //     })
  //   }
  // }

  // password check, 6-18 digits number + letters

  function checkReg(){
    const regExp = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$")
    if(regExp.test(password)){
      setErrorMsg({password:''})
      setIsLoading(false)
    }else{
      setErrorMsg({password:'Password must meet complexity requirements'})
      setIsLoading(true)
    }
  }

  function submitForm(e) {
    e.preventDefault();
    setErrorMsg({})
    setIsLoading(true)
    //发送网络请求，
    const userData = { username, email, password, cfmPassword }
    // props.signUpRequest(userData).then((res) => console.log(res.data))
    dispatch(signUpRequest(userData)).then(
      (res) => {
        //send messages to redux,再次提示
        dispatch(flashMessageAction.addFlashMessage({msgType:"success",text:'Congratulation Mate! You register is successful!!!'}))
        //return to home page
        if(res.data.msg){
          navigate('/home')
        }
      },
      ({ response }) => {
        setErrorMsg(response.data)
        setIsLoading(false)
      }
    )
  }

  return (
    <form onSubmit={submitForm}>
      <h1>Join Our Community</h1>
      <div className='mb-3'>
        <label className='form-label'>Username</label>
        <input type="text" className='form-control' onChange={getUsername} onBlur={checkUserExist}/>
        {/* <span>{errorMessage.signUpReducer.username?errorMessage.signUpReducer.username:''}</span> */}
        <span>{errorMsg.username}</span>
      </div>

      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input type="email" className='form-control' onChange={getEmail} />
        <span>{errorMsg.email}</span>
      </div>

      <div className='mb-3'>
        <label className='form-label'>Password</label>
        <input type="password" className='form-control' onChange={getPassword} onKeyUp={checkReg}/>
        <span>{errorMsg.password}</span>
      </div>

      <div className='mb-3'>
        <label className='form-label'>Confirm Password</label>
        <input type="password" className='form-control' onChange={getCfmPassword} />
        <span>{errorMsg.cfmPassword}</span>
      </div>

      <div className='mb-3'>
        <button disabled={isLoading} className='btn btn-primary btn-lg'>Register</button>
      </div>
    </form>
  )
}
