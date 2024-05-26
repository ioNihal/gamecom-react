import React from 'react';
import Navbar from './Navbar.jsx';
import MainContent from './MainContent.jsx';
import NotificationCon from './NotificationCon.jsx';
import ConnectWithUs from './ConnectWithUs.jsx';
import Title from './Title.jsx';

import styled from 'styled-components';

const BodyMain = styled.div`
    display: grid;
    grid-template: 10% 60% 30% / 50% auto 40%;
    height: 100%;
    width: 100%;
    background-color: rgb(8, 8, 8);

    @media (max-width: 1200px) {
        grid-template: 10% 60% 30% / 40% auto 30%;
    }

    @media (max-width: 768px) {
      grid-template: 5% 40% 30% 35% 20% / 100%;
      height: 130%;
    }

    @media (max-width: 480px) {
      grid-template: 5% 40% 30% 35% 20% / 100%;
      height: 130%;
    }
`;

function MainBody() {
  return (
    <>
      <BodyMain>
        <Title />
        <Navbar />
        <MainContent />
        <NotificationCon />
        <ConnectWithUs />
      </BodyMain>
    </>
  );
}

export default MainBody;