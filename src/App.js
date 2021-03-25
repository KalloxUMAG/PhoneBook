import React, { useState } from "react";
import { List } from "./components/List";
import { Error } from "./components/Error";
import "./styles.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [error, setError] = useState({ state: false, input: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === "") {
      setError({ state: true, type: "Nombre" });
      return;
    }
    if (newNumber === "") {
      setError({ state: true, type: "Numero" });
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber
    };
    if (validateNumber()) {
      setError({ state: true, type: "Repeat" });
      return;
    }
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const handleChangeName = (e) => {
    setError({ state: false, input: "" });
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    if (!Number(e.target.value) && e.target.value !== "") {
      return;
    }
    setError({ state: false, input: "" });
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
      <form onSubmit={handleSubmit} className="form-section">
        <div className="name-input-section">
          Nombre:{" "}
          <input
            value={newName}
            maxLength={20}
            onChange={(e) => handleChangeName(e)}
          />
        </div>
        <div className="number-input-section">
          Numero:{" "}
          <input
            value={newNumber}
            maxLength={10}
            onChange={(e) => handleChangeNumber(e)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {error.state ? <Error error={error.type} /> : true}
      <div className="separator"></div>
      <h2>Numbers</h2>
      <List persons={persons} />
    </>
  );
};

export default App;
