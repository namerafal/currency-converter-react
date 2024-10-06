import { AppContainer, LoadingField } from './styledApp';
import Form from './Form';
import { useState } from 'react';
import { Legend } from './Form/styled';
import { Header } from './Header';
import useCurrencyRequest from '../useCurrencyRequest';
import Coin from '../images/animatedCoin/coin';

function App() {
  const [result, setResult] = useState({ sourceAmount: null, amountToCurrency: null, selectedCurrency: null });
  const [currencyRate, setCurrencyRate] = useState(null);
  const { rates, date, loading, error } = useCurrencyRequest("");

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
      <LoadingField>
        <Legend>Kalkulator walut</Legend>
        {loading ? (
          <>
            <div>Loading...</div>
            <Coin />
          </>
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
            date={date}
          />
        )}
      </LoadingField>
    </AppContainer>
  );
}

export default App;
