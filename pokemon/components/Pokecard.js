function Pokecard({ name, img, type, exp }) {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{name}</h3>
      <img className="Pokecard-image" src={img} alt={name} />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {exp}</p>
    </div>
  );
}
