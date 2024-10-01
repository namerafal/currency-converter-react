import { useState } from 'react';
import { AppContainer } from './styled';
import { Header } from './Header';
import useCurrencyRequest from '../useCurrencyRequest';
import Form from './Form';

function App() {
  const [result, setResult] = useState({ sourceAmount: null, amountToCurrency: null, selectedCurrency: null });
  const [currencyRate, setCurrencyRate] = useState(null);
  const { rates, loading, error } = useCurrencyRequest("");

  const calculateResult = (amount, selectedCurrency) => {
    const currencyRate = rates[selectedCurrency]?.value;

    setResult({
      sourceAmount: +amount,
      amountToCurrency: amount * currencyRate,
      selectedCurrency,
    });

  }

  return (
    <AppContainer>
      <Header title={"Przeliczanie PLN na waluty"} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error: {error}</div>
      ) : (
        <Form
          result={result}
          currencyRate={currencyRate}
          calculateResult={calculateResult}
          setResult={setResult}
          setCurrencyRate={setCurrencyRate}
          rates={rates}
        />
      )}
    </AppContainer>
  );
}

export default App;
