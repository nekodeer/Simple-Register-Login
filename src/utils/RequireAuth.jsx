import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../components/login/LoginPage';
import Shop from '../components/shop/Shop';
import { addFlashMessage } from '../redux/actions/flashmessage';

export default function LoginPageWithError() {
  
  // const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  const dispatch = useDispatch();
  //如果isAuthenticated为false代表用户没有登录
  //  useEffect(() =>{
    // if (!isAuthenticated) {

      //提示用户登录
      dispatch(addFlashMessage({
        type: 'danger',
        text: 'Please Login First!'
      }))
      // navigate('/login')
      return <LoginPage/>
    }
  //  },[])
    // else{
    //   return <Shop/>
    // }
// }
