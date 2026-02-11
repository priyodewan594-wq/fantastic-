import React from 'react'
import ChatMessage from './ChatMessage'

interface Props {
  messages: {id:number, text:string, sender:'user'|'ai'}[]
}

const MessageList: React.FC<Props> = ({ messages }) => (
  <div style={{ border:'1px solid #ccc', padding:'10px', minHeight:'300px', marginBottom:'10px' }}>
    {messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  </div>
)

export default MessageList
