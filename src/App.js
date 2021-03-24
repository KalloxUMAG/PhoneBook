import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };
    if (validateNumber()) {
      return;
    }
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    if (!Number(e.target.value)) {
      return;
    }
    setNewNumber(e.target.value);
  };

  const validateNumber = () => {
    const coincidences = persons.filter((person) => person.number === newNumber)
      .length;
    return coincidences;
  };

  return (
    <>
      <h2>Guía telefónica</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Nombre:{" "}
          <input
            value={newName}
            required={true}
            onChange={(e) => handleChangeName(e)}
          />
        </div>
        <div>
          Numero:{" "}
          <input
            value={newNumber}
            maxLength={10}
            required={true}
            onChange={(e) => handleChangeNumber(e)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.number}>
              {person.name}: {person.number}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
