function Pokedex({ pokemon, totalExp, isWinner }) {
  return (
    <div className={`Pokedex ${isWinner ? "winner" : ""}`}>
      <h2 className="Pokedex-title">Total Experience: {totalExp}</h2>
      <div className="Pokedex-cards">
        {pokemon.map((p) => {
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
          return (
            <Pokecard
              key={p.id}
              name={p.name}
              img={imgUrl}
              type={p.type}
              exp={p.base_experience}
            />
          );
        })}
      </div>
      {isWinner && <h3 className="Pokedex-winner">This hand wins!</h3>}
    </div>
  );
}
