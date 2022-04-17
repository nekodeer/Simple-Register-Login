import React from 'react'
import classnames from "classnames"
import { useDispatch } from 'react-redux';
import { delFlashMessage } from '../../redux/actions/flashmessage';

export default function FlashMessage(props) {
  const {message:{msgType,text,id}} = props;
  const dispatch = useDispatch();

  return (
    //根据父级组件返回值动态处理class状态，并展示相应内容
    <div className={classnames('alert',{
      'alert-success': msgType === 'success',
      'alert-danger' :msgType === 'danger'
    })}>
      <button className="close btn-close" onClick={() => dispatch(delFlashMessage(id))}/>
      {text}
      </div>
  )
}
