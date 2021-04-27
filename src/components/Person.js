import React from "react";

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Population - {person.gender}</p>
      <p>Terrain - {person.birth_year}</p>
    </div>
  );
};

export default Person;
