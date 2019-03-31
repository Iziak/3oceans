import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import users from './users.json';
import UserImage from './userImage';
import Bars from './bars';
import Pie from './pie';

const MainComponent = styled.div`
  width:100%;
`;

const Title = styled.div`
  font-size: 10vh;
`;

const ContentText = styled.div`
  font-size: 5vh;
`;

class Contents extends PureComponent {
  renderContent = () => {
    const i = this.props.display;
    switch (i) {
      case 0:
        return (
          <MainComponent>
            <Title>Title</Title>
            <ContentText>This is a bunch of content.</ContentText>
          </MainComponent>
        )
      case 1:
        return (
          <MainComponent>
            <Title>Title</Title>
            <ContentText>This is a bunch more content.</ContentText>
          </MainComponent>
        )
    }
  }
  render() {
    return this.renderContent();
  }
}

export default Contents;
