import React from 'react'

interface Props {
  message: {id:number, text:string, sender:'user'|'ai'}
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const style = {
    textAlign: message.sender==='user' ? 'right' : 'left',
    margin:'5px 0'
  }
  return <div style={style}>{message.text}</div>
}

export default ChatMessage
