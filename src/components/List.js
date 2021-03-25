import React from "react";

export const List = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => {
        return (
          <li key={person.number}>
            {person.name}: {person.number}
          </li>
        );
      })}
    </ul>
  );
};
