import React, { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Error } from "./components/Error";
import "./styles.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);

  const [error, setError] = useState({ state: false, input: "" });

  const handleSubmit = (
    e,
    newName,
    newNumber,
    validateNumber,
    setNewName,
    setNewNumber
  ) => {
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

  return (
    <>
      <h2>Guía telefónica</h2>
      <Form handleSubmit={handleSubmit} persons={persons} setError={setError} />
      {error.state ? <Error error={error.type} /> : true}
      <div className="separator"></div>
      <h2>Numbers</h2>
      <List persons={persons} />
    </>
  );
};

export default App;
