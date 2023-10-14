import { React, useState } from 'react';
import OpenAI from 'openai';

export default function ChatbotWindow( {param1, param2} ) {
  // handle params

  // helper functions go here
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(["test message 1", "test message 2 asdfasdfaawe"]);

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
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <div style={{position: "absolute", bottom: "5rem"}}>
        <div style={{position: "relative", left: "1rem", right: "1rem", width: "90%"}}>
        <div className="messages" style={{alignItems: "left"}}>
          {
          messages.map(message => {
            return <div style={{}}>{message}<br></br></div>
          })}
        </div>
        <div style={{}}>
          <form onSubmit={handleSubmit}>
            <input
              style={{padding: '1rem', width: "75%"}}
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
        </div>
        </div>
      </div>
    </>
  );
};


// export default ChatbotWindow;
