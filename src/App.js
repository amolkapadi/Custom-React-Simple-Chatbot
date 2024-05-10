import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './App.css'; // Import your custom CSS file here
import user1 from './img/user1.png';
import user2 from './img/user2.png';
import { ThemeProvider } from 'styled-components';
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'Green',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'Green',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
function App() {
  // Custom style for the chatbot
  const customStyle = {
    // Change the background color
    background: 'red',
    // Change the font color
    fontFamily: 'Arial, sans-serif',
  };

  // Custom steps for the chatbot
  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'What number am I thinking?',
      trigger: '5',
    },
    {
      id: '5',
      options: [
        { value: 1, label: 'Number 1', trigger: '7' },
        { value: 2, label: 'Number 2', trigger: '6' },
        { value: 3, label: 'Number 3', trigger: '6' },
      ],
    },
    {
      id: '6',
      message: 'Wrong answer, try again.',
      trigger: '5',
    },
    {
      id: '7',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
  ];

  return (
       <>
        <h1>React Simple Chatbot</h1>
        <h1>Change BotAvatar, UserAvatar , header Color and Text Change</h1>
         <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle="Company Name" 
          botAvatar={user1} 
          userAvatar={user2} 
          botDelay={1000} 
        />
     </ThemeProvider>
       </>
  );
}

export default App;
