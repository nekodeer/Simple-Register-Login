import validator from 'validator';
import { isEmpty } from 'lodash';

const validateInput = (data) =>{
  let errors={}
  if(validator.isEmpty(data.username)){
    errors.username = 'Please input username'
  }
  if(validator.isEmpty(data.password)){
    errors.password = 'Please input password'
  }
  return{
    errors,
    isValid:isEmpty(errors)
  }
} 

export default validateInput