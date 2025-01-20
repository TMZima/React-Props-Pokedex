function Pokedex({ pokemon }) {
  return (
    <div>
      {pokemon.map((char) => {
        const imgId = char.id;
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgId}.png`;
        return (
          <Pokecard
            key={char.id}
            name={char.name}
            img={img}
            type={char.type}
            exp={char.base_experience}
          />
        );
      })}
    </div>
  );
}
