import { useState } from 'react';
import { AppContainer } from './styled';
import { Header } from './Header';
import { currencies } from './currencies';
import Form from './Form';

function App() {
  const [result, setResult] = useState({ sourceAmount: null, amountToCurrency: null, selectedCurrency: null });
  const [currencyRate, setCurrencyRate] = useState(null);

  const calculateResult = (amount, selectedCurrency) => {
    const currencyRate = currencies.find(({ short }) => short === selectedCurrency);

    setResult({
      sourceAmount: +amount,
      amountToCurrency: currencyRate && !isNaN(amount)
        ? amount * currencyRate.rate
        : null,
      selectedCurrency,
    });
  }

  return (
    <AppContainer>
      <Header title={"Przeliczanie walut na PLN"} />
      <Form
        result={result}
        currencyRate={currencyRate}
        calculateResult={calculateResult}
        setResult={setResult}
        setCurrencyRate={setCurrencyRate}
      />
    </AppContainer>
  );
}

export default App;
