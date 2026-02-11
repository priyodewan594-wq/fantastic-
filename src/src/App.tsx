import React, { useState } from 'react'
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'
import { sendMessage } from './services/openai'

const App = () => {
  const [messages, setMessages] = useState<{id:number, text:string, sender:'user'|'ai'}[]>([])

  const handleSend = async (text: string) => {
    const newMsg = {id: Date.now(), text, sender: 'user'}
    setMessages(prev => [...prev, newMsg])

    const aiResponse = await sendMessage(text)
    setMessages(prev => [...prev, {id: Date.now()+1, text: aiResponse, sender:'ai'}])
  }

  return (
    <div style={{ maxWidth:'600px', margin:'50px auto', fontFamily:'sans-serif' }}>
      <h1 style={{ textAlign:'center' }}>Fantastic AI</h1>
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  )
}

export default App
