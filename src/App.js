import './index.css';
import Container from './Container';
import Form from './Form';

function App() {
  return (
    <Container>
      <h1><span className="container__header">Przeliczanie walut na PLN</span></h1>
      <Form />
    </Container>
  );
}

export default App;
