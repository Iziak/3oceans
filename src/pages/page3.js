import React, { PureComponent } from 'react';
import styled from 'styled-components';
import User from '../util/user';

const MainComponent = styled.iframe`
  width:100vw;
  height:100vh;
`;

class Page extends PureComponent {
  render() {
    return (
      <MainComponent src="http://10.60.46.56:8000/hex.html?layer=calgary&ward=no_ward9">
      </MainComponent>
    );
  }
}

export default Page;
