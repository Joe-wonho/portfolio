import styled from 'styled-components';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Archiving from './components/Archiving/Archiving';
import Projects from './components/Projects/Projects';
import Foot from './components/Foot/Foot';
const Body = styled.div`
  min-height: 100vh;
  position: relative;

  @media all and (max-width: 1023px) {
    overflow-x: hidden;
  }
`;
function App() {
  return (
    <>
      <Body>
        <Header />
        <Banner />
        <Introduction />
        <Skills />
        <Archiving />
        <Projects />
        <Foot />
      </Body>
    </>
  );
}

export default App;
