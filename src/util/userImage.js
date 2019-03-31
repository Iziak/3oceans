import React, { PureComponent } from 'react';
import styled from 'styled-components';
import colors from './colors';

const MainComponent = styled.div`
  width:100%;
  background-color:${props => props.color};
  padding:5%;
`;

class UserImage extends PureComponent {
  render() {
    const id = this.props.user.id.split("");
    return (
      <MainComponent color={colors.tenColors[id[0]]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
          <path fill={colors.tenColors[id[2]]} d="M306.001 325.988c90.563-.005 123.147-90.682 131.679-165.167C448.188 69.06 404.799 0 306.001 0c-98.782 0-142.195 69.055-131.679 160.82 8.54 74.484 41.114 165.175 131.679 165.168z"/>
          <path fill={colors.tenColors[id[4]]} d="M550.981 541.908c-.99-28.904-4.377-57.939-9.421-86.393-6.111-34.469-13.889-85.002-43.983-107.465-17.404-12.988-39.941-17.249-59.865-25.081-9.697-3.81-18.384-7.594-26.537-11.901-27.518 30.176-63.4 45.962-105.186 45.964-41.774 0-77.652-15.786-105.167-45.964-8.153 4.308-16.84 8.093-26.537 11.901-19.924 7.832-42.461 12.092-59.863 25.081-30.096 22.463-37.873 72.996-43.983 107.465-5.045 28.454-8.433 57.489-9.422 86.393-.766 22.387 10.288 25.525 29.017 32.284 23.453 8.458 47.666 14.737 72.041 19.884 47.077 9.941 95.603 17.582 143.921 17.924 48.318-.343 96.844-7.983 143.921-17.924 24.375-5.145 48.59-11.424 72.041-19.884 18.736-6.757 29.789-9.895 29.023-32.284z"/>
        </svg>
      </MainComponent>
    );
  }
}

export default UserImage;
