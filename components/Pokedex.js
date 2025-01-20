function Pokedex({ pokemon, totalExp }) {
  return (
    <div className="Pokedex">
      <h2>Total Experience: {totalExp}</h2>
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
    </div>
  );
}
