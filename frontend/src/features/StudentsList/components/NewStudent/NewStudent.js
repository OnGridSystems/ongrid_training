import React, { useState } from 'react';


export const NewStudent = ({ students, setStudents }) => {
  const [newName, setNewName] = useState('');
  const [newSurname, setNewSurname] = useState('');

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNewSurnameChange = (e) => {
    setNewSurname(e.target.value);
  }

  const handleAdd = () => {
    if (!newName || !newSurname) {
      return;
    }
    const updatedStudents = [...students, { id: Math.floor(Math.random() * 10000), name: newName, surname: newSurname }]
    setStudents(updatedStudents);
  }

  return (
    <tr>
      <td>
        <input onChange={handleNewNameChange} value={newName}></input>
      </td>
      <td>
        <input onChange={handleNewSurnameChange} value={newSurname}></input>
      </td>
      <td>
        <button onClick={handleAdd}>+</button>
      </td>
    </tr>
  )
}
