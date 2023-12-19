import styled from 'styled-components'
import Header from './components/header';
import Search from './components/search';
import NewsBooks from './components/newsBooks';

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <NewsBooks/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);

`

export default App;