import React, {Component} from 'react';
import Chat from "./Chat";

const name = 'vlad'
const placeOfBirth = 'Kyiv'
let age = '19'

function UserProfile() {
    return (
        <div className="chats">
            <Chat
                name="Julz Peterson"
                message="Ok,bye,see you later,bro"
                timestamp="12 minutes ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            />

            <Chat
                name="Mark Zuckerberg"
                message="Hello,how are you? what are you doing?"
                timestamp="40 seconds ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            />
            <Chat
                name="Sonny Sangha"
                message="What are you doing man?"
                timestamp="41 minutes ago"
                profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
            />

            <Chat
                name="Elon Musk"
                message="How are you?"
                timestamp=" yesterday"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            />

            <Chat
                name="Qazi Rafeh"
                message="See you again,brother,have a  good day"
                timestamp="one month ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            />
        </div>
    )
}

export default UserProfile;