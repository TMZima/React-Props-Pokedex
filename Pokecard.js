function Pokecard({ name, img, type, exp }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
}
