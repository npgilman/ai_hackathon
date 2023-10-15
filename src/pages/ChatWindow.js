// chat window to hold gpt bot
import ChatbotWindow from '../Components/chatbot.js'

function ChatWindow() {
    return (
        <div className="flex-shrink-0" style= {{width: '25%', backgroundColor: '#2D283E'}}>
            <ChatbotWindow />
        </div>
    );
}

export default ChatWindow;