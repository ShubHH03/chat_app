// import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        < ChatEngine
            height="100vh"
            projectID="8452c45f-e26d-44a7-a25b-8c5744938dec"
            userName="max"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;


