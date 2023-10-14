import { React, useState } from 'react';
import OpenAI from 'openai';
import Message from './Message';

export default function ChatbotWindow( {param1, param2} ) {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add to messages
    const messageHistory = [...messages];

    if (apiResponse !== "") {
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
    setPrompt("");
    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": query}],
        max_tokens: 50,
      });
      setPrompt("");
      console.log("Response: ", result.choices[0].message)
      setApiResponse(result.choices[0].message.content)
    }
    catch (e) {
      messageHistory.push("Error");
      setMessages(messageHistory);
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
        <div style={{position: "relative", left: "1rem", right: "1rem", width: "100%"}}>
        <article className="pb-24">
          {messages.map((message, index) => (
            <Message
              key={`message-${index}`}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          {loading ? <Message message={""} isUser={false} /> : <Message message={apiResponse} isUser={false} />}
        </article>
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
              {loading ? "Loading" : "Chat"}
            </button>
          </form>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
