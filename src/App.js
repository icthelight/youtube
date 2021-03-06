import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import HeaderContainer from './views/shared/containers/HeaderContainer';
import { GlobalStyle } from './styled/GlobalStyle';
import Watch from './pages/Watch';
import Search from './pages/Search';
import SidebarContainer from './views/shared/containers/SidebarContainer';
import SidebarGuide from './views/shared/components/Sidebar/components/SidebarGuide';

const App = () => (
  <Container>
    <GlobalStyle />
    <HeaderContainer />
    <SidebarContainer />
    <Template>
      <SidebarGuide />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/watch/:id" component={Watch} />
          <Route exact path="/results/:query" component={Search} />
        </Switch>
      </Main>
    </Template>
  </Container>
)

const Container = styled.div`

`;

const Template = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
`;
export default App;
