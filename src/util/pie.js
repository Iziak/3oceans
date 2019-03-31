import React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  height:50vh;
  display:flex;
  flex-direction:row;
  align-items: flex-end;
  color:white;
`;

const PieOuter = styled.div`
  border-radius: 50%;
  width: 50vh;
  height: 50vh;
  border: 2px solid white;
  display: flex;
  align-items: center;
`;

const Pie = styled.div`
  margin:0 auto;
  border-radius: 50%;
  width: ${p => p.risk*50}vh;
  height: ${p => p.risk*50}vh;
  background-color: rgba(250,${p => 250-p.risk*250},${p => 250-p.risk*250},0.9);
  transition: all 0.5s;
`;
const Wrap = styled.div`
  color:white;
`;
const pie = user => {
  const { risk } = user.user;
  return (
    <Wrap>
      <BarWrapper>
        <PieOuter>
          <Pie risk={risk} />
        </PieOuter>
      </BarWrapper>
      Risk: 0{risk}
    </Wrap>
  )
}

export default pie;