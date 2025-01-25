import { Button } from '@mui/material'
import React from 'react'
import useChatHook from './Chat.hook'
import './Chat.styles.scss';

const Chat = () => {
    const { chats } = useChatHook();
    return (
        <div className='container'>
            {
                chats.map((chat) => (
                    <div className='item' key={chat._id}>
                        {chat.chatName}
                    </div>
                ))
            }
        </div>
    )
}

export default Chat
