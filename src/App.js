import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginFrom';


const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (

        <ChatEngine
            height=" 100vh"
            projectID="df252df4-d33d-482c-808d-b37c68cc88a1"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;
