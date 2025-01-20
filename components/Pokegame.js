function Pokegame({ pokemon }) {
  // Shuffle pokemon array
  const shuffledPokemon = [...pokemon].sort(() => 0.5 - Math.random());

  // Split shuffled array into two hands
  const hand1 = shuffledPokemon.slice(0, 4);
  const hand2 = shuffledPokemon.slice(4, 8);

  const hand1Exp = hand1.reduce((acc, p) => acc + p.base_experience, 0);
  const hand2Exp = hand2.reduce((acc, p) => acc + p.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} totalExp={hand1Exp} />
      <Pokedex pokemon={hand2} totalExp={hand2Exp} />
    </div>
  );
}
