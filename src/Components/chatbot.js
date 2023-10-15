import { React, useState } from 'react';
import OpenAI from 'openai';
import Message from './Message';

export default function ChatbotWindow( {param1, param2} ) {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add to messages
    const messageHistory = [...messages];

    if (apiResponse !== '') {
      messageHistory.push({
        text: apiResponse,
        isUser: false,
      });
    }
    messageHistory.push({
      text: prompt,
      isUser: true,
    });
    setMessages(messageHistory);

    // Interatc with OpenAI API
    setLoading(true);
    const query = prompt;
    setPrompt('');
    try {
      const result = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{'role': 'user', 'content': query}],
        max_tokens: 50,
      });
      setPrompt('');
      console.log('Response: ', result.choices[0].message)
      setApiResponse(result.choices[0].message.content)
    }
    catch (e) {
      messageHistory.push('Error');
      setMessages(messageHistory);
    }
    setLoading(false);
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          position: "relative"
        }}
      >
        <div style={{backgroundColor: "#1E1E1E", color: "white", padding: "0.5rem", textAlign:"right", fontSize: "30px", position: "absolute", zIndex: "1", left:"0", right: "0", fontFamily: "Segoe UI"}}>
                <b>aiccoutant.&nbsp;&nbsp;&nbsp;</b>
        </div>
        <div style={{position: 'absolute', bottom: '4rem', left: "0", right: "0"}}>
        <div style={{position: 'relative', padding: "1rem"}}>
        <article className='pb-24'>
          {messages.map((message, index) => (
            <Message
              key={`message-${index}`}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          {loading ? <Message message={''} isUser={false} /> : <Message message={apiResponse} isUser={false} />}
        </article>
        <div style={{}}>
          <form onSubmit={handleSubmit}>
            <input
              style={{padding: '1rem', width: '71%', borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", background: "#E1E1E1", border: "0px", marginTop: "1rem", marginLeft:"1rem", fontFamily: "Segoe UI"}}
              type='text'
              value={prompt}
              placeholder='Enter prompt...'
              onChange={(e) => setPrompt(e.target.value)}
            ></input>
            <button
              disabled={loading || prompt.length === 0}
              type='submit'
              style= {{padding: "1rem 0.5rem", border: "0", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", background: "#1a8754", color: "white", fontFamily: "Segoe UI", width: "20%"}}
            >
              <b>
              {loading ? 'Loading' : 'Chat'}
              </b>
            </button>
          </form>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
