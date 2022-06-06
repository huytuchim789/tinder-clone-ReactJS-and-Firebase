import React from 'react'
import PropTypes from 'prop-types'
import Chat from './Chat'

function Chats(props) {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo What is up😆"
        timestamp="40 seconds"
        profilePic="https://1vs1-7f65.kxcdn.com/img/players/players/cristiano-ronaldo-dos-santos-aveiro_834_52-ub-800.webp"
      ></Chat>
      <Chat
        name="Eleen"
        message="helu"
        timestamp="20 seconds"
        profilePic="https://thumbs.dreamstime.com/b/professional-photo-session-beautiful-sexy-european-woman-desert-197434165.jpg"
      ></Chat>
      <Chat
        name="Yasuo"
        message="Hasagi"
        timestamp="3 days ago"
        profilePic="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
      ></Chat>
      <Chat
        name="Yone"
        message="Hello my storm"
        timestamp="40 seconds"
        profilePic="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg"
      ></Chat>
    </div>
  )
}

export default Chats
