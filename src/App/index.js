import '../index.css';
import { Header } from './Header';
import Container from './Container';
import Form from './Form';

function App() {


  return (
    <Container>
      <Header title={"Przeliczanie walut na PLN"} />
      <Form />
    </Container>
  );
}

export default App;
 