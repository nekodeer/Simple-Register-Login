import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const user = useSelector((state) => state.auth.user )
  function displayUser(){
    console.log(user);
  }
  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={displayUser}>显示用户信息</button>
    </div>
  )
}
