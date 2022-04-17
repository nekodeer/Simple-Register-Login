import React from 'react'
import SignUpForm from './SignUpForm'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { signUpRequest } from '../../redux/actions/signupAction'

export default  function SignUpPage(props) {
  return (
        <div className='row'>
          <div className='col-md-4'></div>
          {/* <div className='col-md-4'><SignUpForm signUpRequest={props.signUpRequest}/></div> */}
          <div className='col-md-4'><SignUpForm /></div>
          <div className='col-md-4'></div>
          </div>
  )
}
// const mapDispatchToProps = (dispatch) => {
//   return{
//     signUpRequest:bindActionCreators(signUpRequest,dispatch)
//   }
// }
// export default connect(null,mapDispatchToProps)(SignUpPage)