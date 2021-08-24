import "./App.css";
import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats></Chats>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards></TinderCards>
            <SwipeButton></SwipeButton>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
{
  /* <Header />
       
      </Router> */
}
{
  /**Tinder Card */
}
{
  /**Button below */
}
{
  /**Chat screen */
}
{
  /**Indivual chat screen */
}
