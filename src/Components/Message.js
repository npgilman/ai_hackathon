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
      return `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>`;
    }
    );
  };

  return (
    <div className='d-flex flex-row'>
      <div title={isUser ? 'user' : 'AI'}>
        {isUser ? '🥸' : '🦙'}
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
  );
};

export default Message;