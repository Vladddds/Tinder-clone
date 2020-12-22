import React, { useState } from 'react';
import './ChatScreen.css'
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401",
            message: "Whats Up",
        },
        {

            name: "Ellen",
            image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401",
            message: "whats up",
        },
        {
            message: "Hi! How are you Mark!",
        },
        {
            message: "I`m fine,thank you!",
        }

    ])

    const handleSend = (e) => {
        e.preventdefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    };


    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">21/12/2020</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image}

                        />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>

                ) : (
                        <div className="chatScreen_message">
                            <p className="chatScreen_textUser">{message.message}</p>
                        </div>
                    )

            ))}

            <form className="chatScreen_input">
                <input value={input}
                    onChange={(e) => setInput(e.target.value)}

                    className="chatScreen_inputField" type="text" placeholder="Write a message..." />
                <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
            </form>

        </div>

    )
}

export default ChatScreen
