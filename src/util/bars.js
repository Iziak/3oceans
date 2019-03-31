import React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  height:50vh;
  display:flex;
  flex-direction:row;
  align-items: flex-end;
  justify-content: space-between;
  color:white;
`;
const Bar = styled.div`
  width:60px;
  height: ${props => props.height}%;
  background-color: ${props => props.color};
  transition: height 0.5s;
  margin-left:10px;
  margin-right:10px;
`;

const bars = user => {
  const { spending, income } = user.user;
  const incomeHigher = income>spending;
  const incomeHeight = incomeHigher? 100 : income/spending*100;
  const spendingHeight = incomeHigher? spending/income*100:100; 
  return (
    <BarWrapper>
      Debits
      <Bar height={incomeHeight} color="skyblue" />
      <Bar height={spendingHeight} color="#2B4162" />
      Credits
    </BarWrapper>
  )
}

export default bars;