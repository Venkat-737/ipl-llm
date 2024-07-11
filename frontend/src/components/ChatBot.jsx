import React, { useState } from 'react';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages([...newMessages, { text: data.answer, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { text: 'Sorry, there was an error processing your request.', sender: 'bot' }]);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center bg-blue-600 text-white p-2 rounded-t-lg">
        <h3 className="font-bold">Fan Query Chatbot</h3>
        <button onClick={onClose} className="text-xl">&times;</button>
      </div>
      <div className="h-96 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="w-full p-2 border rounded"
          placeholder="Type your question..."
        />
        <button
          onClick={sendMessage}
          className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
