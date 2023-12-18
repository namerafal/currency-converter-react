import { useState } from 'react';
import './index.css';
import Container from './Container';
import Form from './Form';
import { Header } from './Header';
import { currencies } from './Currencies';

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("--Wynik--");

  const calculateResult = (amount, selectedCurrency) => {
    const currencyRate = currencies.find(({ short }) => short === selectedCurrency);

    const amountToCurrency = currencyRate
      ? +amount * currencyRate.rate
      : null;

    const formattedResult = currencyRate
      ? `${amount} ${selectedCurrency} = ${amountToCurrency.toFixed(2)} PLN`
      : "--Wynik--";

    setResult(formattedResult);
  };

  const onAmountChange = ({ target }) => setAmount(target.value);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const resetForm = () => {
    setAmount("");
    setCurrency("");
  };

  return (
    <Container>
      <Header title={"Przeliczanie walut na PLN"} />
      <Form
        amount={amount}
        currency={currency}
        result={result}
        onAmountChange={onAmountChange}
        onSelectChange={onSelectChange}
        calculateResult={calculateResult}
        resetForm={resetForm}
      />
    </Container>
  );
}

export default App;
