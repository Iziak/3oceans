import React, { PureComponent } from 'react';
import styled from 'styled-components';
import HomePage from '../homePage';
import Page1 from '../pages/page1';

const MainComponent = styled.div`
  height: 100vh;
  width:100%;
  display: flex;
`;

class Page extends PureComponent {
  render() {
    switch(this.props.track) {
      case 0:
      case 1:
        return <HomePage track={this.props.track}/>;
      case 2: 
      case 3: 
        return <Page1 track={this.props.track-2}/>;
    }
    return (
      <MainComponent>
      </MainComponent>
    );
  }
}

export default Page;
