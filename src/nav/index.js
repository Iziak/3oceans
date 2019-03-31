import React, { PureComponent } from 'react';
import styled from 'styled-components';
import rightArrow from './rightArrow.svg';

const NavContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  height: 50px;
`;
const LeftImg = styled.img`
  width:50px;
  transform: rotate(180deg);
  margin-right:5px;
  background-color:grey;
`;
const RightImg = styled.img`
  width:50px
  background-color:grey;
`;

class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { track: 0 };
  }
  handleLeftClick = e => {
    this.props.nav(false);
  }
  handleRightClick = e => {
    this.props.nav(true);
  }
  render() {
    return (
      <NavContainer on>
        <LeftImg src={rightArrow} onClick={this.handleLeftClick}/>
        <RightImg src={rightArrow} onClick={this.handleRightClick}/>
      </NavContainer>
    );

  }
}

export default Nav;
