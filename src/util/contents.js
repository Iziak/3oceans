import React, { PureComponent } from 'react';
import styled from 'styled-components';
import riskimg from '../risk_calc.png'
import accuracyimg from '../nn.gif';

const MainComponent = styled.div`
  width:100%;
`;

const Title = styled.div`
  font-size: 10vh;
`;

const ContentText = styled.div`
  font-size: 5vh;
  width:60vw;
  height:70vh;
`;
const Img = styled.img`
  max-height:100%;
  max-width:100%;
`;

class Contents extends PureComponent {
  renderContent = () => {
    const i = this.props.display;
    switch (i) {
      case 2:
        return (
          <MainComponent>
            <Title>Data Sources</Title>
            <ContentText>
              <br />Bank Data <br />
              <br />Census Canada <br />
              <br />Insurance (calgary provider) <br />
            </ContentText>
          </MainComponent>
        )
      case 1:
        return (
          <MainComponent>
            <Title>Assumptions</Title>
            <ContentText>
              <br />Calculation of income based on debits and credits into accounts<br />
              <br />All primary-metropolitan areas in Calgary <br />
              <br />Postal code assigned based on income (from Statistics Canada) <br /></ContentText>
          </MainComponent>
        )
      case 0:
        return (
          <MainComponent>
            <Title>Calculating Risk</Title>
            <ContentText>
              <Img src={riskimg} />
            </ContentText>
          </MainComponent>
        )
      case 3:
        return (
          <MainComponent>
            <Title>Accuracy</Title>
            <ContentText>
              <br/> <br/>
              <Img src={accuracyimg} />
            </ContentText>
          </MainComponent>
        )
        case 7:
        return (
          <MainComponent>
            <Title>What now?</Title>
            <ContentText>
              <br /><br /><br />
              Now that we can determine risk with some accuracy, how do we use it to empower our customers?
              <br/>
              <br/>
              <br/>
              Tailored services
              <br/>
              <br/>
              Personalized education
              <br/>
              <br/>
              Market reach potential
              
            </ContentText>
          </MainComponent>
        )
        case 8:
        return (
          <MainComponent>
            <br/><br/><br/><br/>
            <Title>Thank you!</Title>
          </MainComponent>
        )
      default:
        return <div></div>
    }
  }
  render() {
    return this.renderContent();
  }
}

export default Contents;
