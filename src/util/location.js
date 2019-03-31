import React from 'react';
import styled from 'styled-components';
import pin from './location.svg';

const LocationContainer = styled.div`
  height:50vh;
  display:flex;
  flex-direction:row;
  align-items: flex-start;
`;
const LocationImg = styled.img`
  width: 10vh;
  transform: ${props => `translate(${props.location[0]/8}vw, ${props.location[1]/3}vh)`};
  transition: all 0.5s;
`;
const Wrap = styled.div`
  color:white;
`;
const pie = user => {
  const { pc, location } = user.user;
  return (
    <Wrap>
      <LocationContainer>
        <LocationImg src={pin} location={location}></LocationImg>
      </LocationContainer>
      Location: {pc}
    </Wrap>
  )
}

export default pie;