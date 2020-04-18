import React from 'react';


export const StudentRow = ({ id, name, surname, students, setStudents }) => {
  const handleRemoveStudent = () => {
    const updatedStudents = students.filter(({ id: _id }) => _id !== id);
    setStudents(updatedStudents);
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>
        <button onClick={handleRemoveStudent}>x</button>
      </td>
    </tr>
  )
}
