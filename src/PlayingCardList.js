import React, { useState } from 'react';
import PlayingCard from './PlayingCard';
import { useAxios1 } from './hooks';
import './PlayingCardList.css';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  let [cards, addCard] = useAxios1(
    'https://deckofcardsapi.com/api/deck/new/draw/'
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {Array.from(cards).map((card) => (
          <PlayingCard key={card.id} front={card.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
