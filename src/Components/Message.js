const Message = ({ message, isUser }) => {
  let containerClass = '';
  if (isUser) {
    containerClass = '';
  }

  if (Array.isArray(message)) {
    message = message.join('');
  }

  if (!message || message === '') {
    return null;
  }

  return (
    <div className={isUser ? 'user' : 'AI'}>
      <div className='d-flex flex-row' style={{color: "white", fontSize:"20px"}}>
          <div title={isUser ? 'user' : 'AI'} style={{marginRight: "0.5rem"}}>
            {isUser ? '😄' : '🦙'}
          </div>

          <div>
            {message.split('\n').map(
              (text, index) =>
                text.length > 0 && (
                  <span key={index}>
                    {text}
                  </span>
                )
            )}
          </div>
      </div>
    </div>
  );
};

export default Message;