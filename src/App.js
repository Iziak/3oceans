import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Nav from './nav';
import PageContainer from './pageContainer';

const MainComponent = styled.div`
  height: 100vh;
  width:100%;
`;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { track: 0 };
  }
  handleNav = t => {
    if(t)
      this.setState({track: this.state.track + 1})
    else
      if(this.state.track > 0)
        this.setState({track: this.state.track - 1})
    console.log('Track:',this.state.track)
  }
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }
  handleKeyPress = e => {
    if(e)
      if(e.keyCode === 39)
        this.handleNav(true)
      else if(e.keyCode === 37)
        this.handleNav(false)
    e.stopPropagation()
  }
  render() {
    return (
      <MainComponent>
        <PageContainer track={this.state.track} />
        <Nav
          nav={this.handleNav}
        />
      </MainComponent>
    );
  }
}

export default App;
