function Pokecard({ name, img, type, exp }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
}
