import './index.css';
import Container from './Container';
import Form from './Form';
import { Header } from './Header';

function App() {


  return (
    <Container>
      <Header title={"Przeliczanie walut na PLN"} />
      <Form />
    </Container>
  );
}

export default App;
