import React from 'react';
import styled from 'styled-components';

import { StudentsList } from 'features/StudentsList';


export const RootPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>OnGrid FullStack Bootcamp</h1>
        <p>Welcome to OnGrid FullStack Bootcamp. Here is the list of students</p>
      </Header>
      <StudentsList />
    </Wrapper >
  );
}


const Wrapper = styled.div`
  width: min-content;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
  padding: 48px 0;
`;
