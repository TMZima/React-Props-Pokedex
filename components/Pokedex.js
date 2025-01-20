function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
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
