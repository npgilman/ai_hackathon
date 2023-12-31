const Message = ({ message, isUser }) => {
  if (Array.isArray(message)) {
    message = message.join('');
  }

  if (!message || message === '') {
    return null;
  }

  const formatTextWithLinks = (text) => {
    return text.replace(
      /(\[(.*?)\])\((https?:\/\/\S+)\)/g,
    (match, linkText, linkLabel, linkUrl) => {
      return `<a href="${linkUrl}" rel="noopener noreferrer">${linkLabel}</a>`;
    }
    );
  };

  return (
    <div className={isUser ? 'user' : 'AI'}>
      <div className='d-flex flex-row' style={{color: "#E1E1E1", fontSize:"20px", zIndex: "-1"}}>
          <div title={isUser ? 'user' : 'AI'} style={{marginRight: "0.5rem"}}>
            {isUser ? '🐊' : '🤖'}
          </div>
      

      <div>
        {message.split('\n').map(
          (text, index) =>
            text.length > 0 && (
              <span key={index}>
                 <p dangerouslySetInnerHTML={{ __html: formatTextWithLinks(text) }}></p>
              </span>
            )
        )}
      </div>
      </div>
    </div>
  );
};

export default Message;