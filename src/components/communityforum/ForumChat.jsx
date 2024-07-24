import React, { useContext } from 'react'
import { Context } from '../..'

const Chats = ({senderId, message, index}) => {
  const {user} = useContext(Context)
  return (
    <div className="chatbox" key={index} style={{alignSelf : senderId === user.username ? "flex-end" : "flex-start"}}>
        <p>{message}</p>
        <span>{senderId}</span>

    </div>
  )
}

export default Chats