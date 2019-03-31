import React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  height:50vh;
  display:flex;
  flex-direction:row;
  align-items: flex-end;
  color:white;
`;
const Pie = styled.div`
  border-radius: 50%;
  width: 50vh;
  height: 50vh;
  background: conic-gradient(
    pink ${props => props.risk*360}deg,
    rgba(0,0,0,0) 0
  );
  opacity:.9;
`;

const pie = user => {
  console.log(user);
  const { risk } = user.user; 
  return (
    <BarWrapper>
      <Pie risk={risk}/>
    </BarWrapper>
  )
}

export default pie;