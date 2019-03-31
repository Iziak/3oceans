import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import users from './users.json';
import UserImage from './userImage';
import Bars from './bars';
import Pie from './pie';
import Location from './location';

const MainComponent = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-align:center;
  justify-content: center;
  opacity:.8;
`;
const grow = keyframes`
  from { width:0; }
  to { width:35vw; }
`;
const Overlay = styled.div`
  position:absolute;
  top:0;
  left:0;
  height:100vh;
  background-color:grey;
  opacity:.2;
  animation: ${grow} 10s linear infinite;
`;
const ChildWrapper = styled.div`
  position:absolute;
  display:flex;
  align-items:center;
  height:100vh;
`;

class User extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { interval: null, user: 0 };
  }
  componentDidMount() {
    this.setState({ interval: setInterval(this.newUser, 10000) });
  }
  componentWillUnmount(){
    clearInterval(this.state.interval);
  }
  newUser = () => {
    const currentUser = this.state.user;
    if(!users[currentUser+1])
      this.setState({user:0});
    else
      this.setState({user:currentUser+1});
  }
  renderDisplay = user => {
    const i = this.props.display;
    switch(i){
      case 1:
        return (
          <Bars user={user}></Bars>
        )
      case 2:
      default:
        return (
          <Pie user={user}></Pie>
        )
      case 0:
        return (
          <Location user={user}></Location>
        )
    }
  }
  render() {
    return (
      <MainComponent>
        <UserImage user={users[this.state.user]} />
        <Overlay />
        <ChildWrapper>
          {this.renderDisplay(users[this.state.user])}
        </ChildWrapper>
      </MainComponent>
    );
  }
}

export default User;
