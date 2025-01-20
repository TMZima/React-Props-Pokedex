function Pokecard({ name, img, type, exp }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
}
