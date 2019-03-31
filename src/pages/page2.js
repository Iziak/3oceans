import React, { PureComponent } from 'react';
import styled from 'styled-components';
import User from '../util/user';

const MainComponent = styled.div`
  display: flex;
  flex-direction: row;
`;
const DataDiv = styled.div`
  width: 35vw;
  height: 100vh;
  background-color:skyblue;
`;
const ContentDiv = styled.div`
  width: 65vw;
  height: 100vh;
  background-color:purple;
  color:white;
`;

const ContentWrapper = styled.div`
  padding: 30px 0 0 30px;
`;

const Title = styled.div`
  font-size: 10vh;
`;

const ContentText = styled.div`
  font-size: 5vh;

`;

class Page extends PureComponent {
  render() {
    return (
      <MainComponent>
        <DataDiv>
          <User display="2">
          </User>
        </DataDiv>
        <ContentDiv>
          <ContentWrapper>
            <Title>Title</Title>
            <ContentText>This is a bunch more content.</ContentText>
          </ContentWrapper>
        </ContentDiv>
      </MainComponent>
    );
  }
}

export default Page;
