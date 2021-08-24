import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards(props) {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const unsubscribe = () => {
      console.log(database);
      database.collection("people").onSnapshot((snapshot) => {
        setPeople(snapshot.docs.map((doc) => doc.data()));
      });
    };
    unsubscribe();
  }, []);
  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swiper"
            key={person.className}
            preventSwipe={["up,down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
