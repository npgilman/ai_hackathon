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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": prompt}],
        max_tokens: 50,
      });
      console.log("Response: ", result.choices[0].message)
      setApiResponse(result.choices[0].message);
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={prompt}
            placeholder="Enter prompt"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
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
