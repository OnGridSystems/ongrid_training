import React, { useState } from 'react';
import styled from 'styled-components';

import { StudentRow, NewStudent } from './components';


export const StudentsList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Ivan', surname: 'Osadchiy' },
    { id: 2, name: 'Kirill', surname: 'Varlamov' },
    { id: 3, name: 'Vikentiy', surname: 'Marikov' },
    { id: 4, name: 'Ilya', surname: 'Kuzmenko' },
    { id: 5, name: 'Max', surname: 'Savinov' },
    { id: 6, name: 'Tanya', surname: 'Kozlova' },
    { id: 7, name: 'Max', surname: 'DiGreez' },
  ]);

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ id, name, surname }) => (
          <StudentRow
            id={id}
            name={name}
            surname={surname}
            students={students}
            setStudents={setStudents}
            key={id}
          />
        ))}
      </tbody>
      <tfoot>
        <NewStudent students={students} setStudents={setStudents} />
      </tfoot>
    </StyledTable>
  );
}


const StyledTable = styled.table`
    width: 60vw;
    border-collapse: collapse;
    td {
        padding: 8px;
        line-height: 1.42857143;
        vertical-align: top;
        border-top: 1px solid #ddd;
    }
    th {
        padding: 8px;
        vertical-align: bottom;
        border-bottom: 2px solid #ddd;
        text-align: left;
        font-weight: bold;
    }
`;
