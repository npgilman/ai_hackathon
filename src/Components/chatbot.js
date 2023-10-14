import { React, useState } from 'react';
import OpenAI from 'openai';

function ChatbotWindow( {param1, param2} ) {
  // handle params

  // helper functions go here
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(["test message 1", "test message 2"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add to messages
    var messageCopy = messages;
    messageCopy.push(prompt);


    // AI list
    setLoading(true);
    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": prompt}],
        max_tokens: 50,
      });
      console.log("Response: ", result.choices[0].message)
      setApiResponse(result.choices[0].message);
      
      messageCopy.push(result.choices[0].message.content);
      setMessages(messageCopy);
    }
    catch (e) {
      setApiResponse("Error");
    }
    setLoading(false);
  };

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <div className="messages" style={{alignItems: "left"}}>
          {messages.map(message => {
            return <>{message}<br></br></>
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            style={{padding: '1rem', width: "50%"}}
            type="text"
            value={prompt}
            placeholder="Enter prompt"
            onChange={(e) => setPrompt(e.target.value)}
          ></input>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating" : "Generate"}
          </button>
        </form>
      </div>
    </>
  );
};


export default ChatbotWindow;
