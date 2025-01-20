const CARD_VALUES = {
  ACE: 11,
  KING: 10,
  QUEEN: 10,
  JACK: 10,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
};

// Fetch Cards from API
async function fetchCards() {
  try {
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
    );
    const data = await response.json();
    return data.cards;
  } catch (err) {
    console.log(err);
  }
}

// Calculate the Total Score
function calculateScore(cards) {
  const cardValues = cards.map((card) => CARD_VALUES[card.value]);
  return cardValues.reduce((acc, value) => acc + value, 0);
}

function Blackjack({ cards, score, message }) {
  return (
    <div>
      <h1>Blackjack Game</h1>
      <div className="cards">
        {cards.map((card) => (
          <img
            key={card.code}
            src={card.image}
            alt={`${card.value} of ${card.suit}`}
          />
        ))}
      </div>
      <h2>Total Score: {score}</h2>
      {message && <h3>{message}</h3>}
    </div>
  );
}
