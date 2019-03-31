import React, { PureComponent } from 'react';
import styled from 'styled-components';
import User from '../util/user';
import Contents from '../util/contents';

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

class Page extends PureComponent {
  render() {
    return (
      <MainComponent>
        <DataDiv>
          <User display={this.props.track}>
          </User>
        </DataDiv>
        <ContentDiv>
          <ContentWrapper>
            <Contents display={this.props.track}></Contents>
          </ContentWrapper>
        </ContentDiv>
      </MainComponent>
    );
  }
}

export default Page;
