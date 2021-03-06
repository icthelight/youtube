import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaMatch } from 'rooks';

import Shortcuts from '../components/Sidebar/components/Shortcuts';
import Contents from '../components/Sidebar/components/contents';

const MainSidebarContainer = () => {
  const normalSidebar = useSelector((state) => state.app.normalSidebar)
  const location = useLocation()
  const smallScreen = useMediaMatch('(max-width: 1000px');
  const mobileScreen = useMediaMatch('(max-width: 768px');

  if (mobileScreen || location.pathname.startsWith('/watch/')) return null;
  return (
    <Container>
      {
        // eslint-disable-next-line no-nested-ternary
        smallScreen
          ? <Shortcuts />
          : normalSidebar
            ? <Contents />
            : <Shortcuts />
      }
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
`;
export default MainSidebarContainer;
