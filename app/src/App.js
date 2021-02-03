import './App.css';
import Header from './section/Header';
import Navigation from './components/Navigation';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <Container>
      <Header>
        <Navigation></Navigation>
      </Header>
    </Container>
  );
}

export default App;
