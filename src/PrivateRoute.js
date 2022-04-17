import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addFlashMessage } from "./redux/actions/flashmessage";

export const Private = ({Component:Component}) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch();

  useEffect(() =>{
    if(!isAuth){
      dispatch(addFlashMessage({
        msgType: 'danger',
        text: 'Please Login First!'
      }))
    }
  },[])

  return isAuth?<Component/> : <Navigate to='/login' /> ;
}