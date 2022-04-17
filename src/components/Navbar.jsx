import React, { Fragment } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import setAuthorizationToken from '../utils/validations/setAuthorization Token';
// import { setCurrentUser } from '../redux/actions/authAction';
import { logOut } from '../redux/actions/authAction';
import { addFlashMessage } from '../redux/actions/flashmessage';

export default function Navbar() {

  const {user,isAuthenticated} = useSelector((state) => state.auth )
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function movePage() {
    navigate('/signup');
  }

  function onLogOut(){
    // localStorage.removeItem("loginToken");
    // setAuthorizationToken(false);
    // dispatch(setCurrentUser({}))
    dispatch(logOut());
    navigate('./login')
  }

  const login = (<Fragment>          
    <NavLink to="/login" className="list-group-item nav-link ">Login</NavLink>
    <button className="btn btn-outline-success" onClick={movePage} >Sign up page</button>
    </Fragment>)

  const logined = (<Fragment>
    <h5>You are loginned as {user.username}</h5>
    <button className='btn btn-primary' onClick={onLogOut}>Log Out</button>
    </Fragment>)

  function authLogin(){
    if(!isAuthenticated){
      dispatch(addFlashMessage({
        msgType: 'danger',
        text: 'Please Login First!'
      }))
      navigate('/login');
    }
    else{
      navigate('/shop');
    }
  }

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <div className='d-flex justify-content-end gap-3'>
          <NavLink to="/home" className="list-group-item">Home</NavLink>
          <NavLink to="/shop" className="list-group-item">Online Shop</NavLink>
          <button onClick={authLogin}>Online Shop</button>
        </div>
        <div className='d-flex justify-content-end gap-3'>
            {isAuthenticated?logined:login}
        </div>
      </div>
    </nav>

  )
}
