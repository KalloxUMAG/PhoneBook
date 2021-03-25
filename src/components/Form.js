import React, { useState } from "react";

export const Form = (props) => {
  const { handleSubmit, persons, setError } = props;

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    <form
      onSubmit={(e) =>
        handleSubmit(
          e,
          newName,
          newNumber,
          validateNumber,
          setNewName,
          setNewNumber
        )
      }
      className="form-section"
    >
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
  );
};
