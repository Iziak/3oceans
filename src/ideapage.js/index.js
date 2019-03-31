import React, { PureComponent } from 'react';
import styled from 'styled-components';

const MainComponent = styled.div`
  height:100%;
  width:100%;
  display:flex;
  align-items: center;
  background-color: #000080;
`;
const TextCont = styled.div`
  font-size: 30vh;
  margin: 0 auto;
  color:white;
  font-family:helvetica;
`;
const OtherText = styled.div`
  position:absolute;
  left:25vw;
  width:50vw;
  color:white;
`;

class Page extends PureComponent {
  render() {
    return (
      <MainComponent>
        <TextCont>Custome
        </TextCont>
        <OtherText>
          Amirali <br/>
          Boris <br/>
          Brita <br/>
          Daniel <br/>
          Isaac <br/>
        </OtherText>
      </MainComponent>
    );
  }
}

export default Page;
