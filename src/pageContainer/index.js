import React, { PureComponent } from 'react';
import HomePage from '../homePage';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';

class Page extends PureComponent {
  render() {
    switch(this.props.track) {
      case 0:
      case 1:
        return <HomePage track={this.props.track}/>;
      case 2:
      case 3:
      case 4:
      case 5:
      default:
        return <Page1 track={this.props.track - 2} />;
      case 6:
        return <Page2 />
      case 7:
        return <Page3 />
      case 8:
        return <Page4 />
    }
  }
}

export default Page;
