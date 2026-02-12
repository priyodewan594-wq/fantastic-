import axios from 'axios'

const OPENAI_API_KEY = 'YOUR_API_KEY_HERE'  // Replace with your key

export const sendMessage = async (message: string) => {
  try {
    const res = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{role:'user', content: message}]
    }, {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      }
    })

    return res.data.choices[0].message.content
  } catch(err) {
    console.error(err)
    return "Error: AI not responding."
  }
}
