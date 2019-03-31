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
  transition: all 0.5s;
  transform: ${props => props.track===1?'translate(-30vw, -30vh) scale(.3)':'none'};
`;
const OtherText = styled.div`
  position:absolute;
  left:50vw;
  color:white;
  opacity: ${p => p.track===1?'1':'0'};
  transition: all 1s;
`;

class Page extends PureComponent {
  render() {
    return (
      <MainComponent>
        <TextCont track={this.props.track}>
          3 Oceans
        </TextCont>
        <OtherText track={this.props.track}>
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
