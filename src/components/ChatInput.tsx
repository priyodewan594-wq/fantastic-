import React, { useState } from 'react'

interface Props {
  onSend: (text:string) => void
}

const ChatInput: React.FC<Props> = ({ onSend }) => {
  const [text, setText] = useState('')
  const handleSend = () => {
    if(!text) return
    onSend(text)
    setText('')
  }

  return (
    <div style={{ display:'flex', gap:'5px' }}>
      <input 
        value={text} 
        onChange={e => setText(e.target.value)} 
        style={{ flex:1, padding:'8px' }} 
        placeholder="Type your message..." 
      />
      <button onClick={handleSend} style={{ padding:'8px' }}>Send</button>
    </div>
  )
}

export default ChatInput
