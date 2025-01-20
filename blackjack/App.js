async function renderApp() {
  const cards = await fetchCards();
  const score = calculateScore(cards);
  const message = score === 21 ? "🎉🎉🎉BLACKJACK!!!🎉🎉🎉" : "";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App cards={cards} score={score} message={message} />);
}

function App({ cards, score, message }) {
  return (
    <div>
      <Blackjack cards={cards} score={score} message={message} />
    </div>
  );
}

renderApp();
