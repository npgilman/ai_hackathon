const Message = ({ message, isUser }) => {
  let containerClass = "";
  if (isUser) {
    containerClass = "";
  }

  if (Array.isArray(message)) {
    message = message.join("");
  }

  if (!message || message === "") {
    return null;
  }

  return (
    <div className="d-flex flex-row">
      <div title={isUser ? "user" : "AI"}>
        {isUser ? '🥸' : '🦙'}
      </div>

      <div>
        {message.split("\n").map(
          (text, index) =>
            text.length > 0 && (
              <span key={index}>
                {text}
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default Message;