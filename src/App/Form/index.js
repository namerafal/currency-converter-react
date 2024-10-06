import { useState } from 'react';
import { Header } from '../Header';
import DateClock from './Clock';
import { Fieldset, Legend, LabelText, FieldInput, SelectOption1, Paragraph, Button, FormFooter } from './styled';
import Result from './Result';
import useCurrencyRequest from '../../useCurrencyRequest';

const Form = () => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const ratesData = useCurrencyRequest();

  const calculateResult = (amount, selectedCurrency) => {
    const currencyRate = ratesData.data[selectedCurrency]?.value;

    setResult({
      sourceAmount: +amount,
      amountToCurrency: amount * currencyRate,
      selectedCurrency,
    });

  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  const onAmountChange = ({ target }) => setAmount(target.value);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const resetForm = () => {
    setAmount("");
    setCurrency("");
    setResult({ sourceAmount: null, amountToCurrency: null, selectedCurrency: null });    
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header title={"Przeliczanie PLN na waluty"} />
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        {ratesData.state === "loading" ? (
          <LoadingContent />
        ) : (
          ratesData.state === "error" ? (
            <ErrorContent />
          ) : (
            <>
              <DateClock />
              <p>
                <label>
                  <LabelText>
                    *Kwota w PLN:
                  </LabelText>
                  <FieldInput
                    value={amount}
                    type="number"
                    min="0.25"
                    step="0.01"
                    placeholder="Wpisz kwotę"
                    onChange={onAmountChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  <LabelText>
                    *Wybierz walutę:
                  </LabelText>

                  <FieldInput as="select"
                    $select
                    value={currency}
                    onChange={onSelectChange}
                  >
                    <SelectOption1
                      value=""
                    >
                      --Wybierz walutę--
                    </SelectOption1>

                    {Object.keys(ratesData.data).map((short) => (
                      <option
                        key={short}
                        value={short}
                      >
                        {short}
                      </option>

                    ))}
                  </FieldInput>

                </label>
              </p>
              <Paragraph>
                Wynik to koszt waluty w stosunku do PLN:
              </Paragraph>
              <Result result={result}/>

              <>
                <Button
                  type="submit"
                >
                  PRZELICZ
                </Button>
                <Button
                  onClick={resetForm}
                >
                  WYCZYŚĆ
                </Button>
              </>

              <Paragraph>
                Kursy walut pobrane są z Europejskiego Banku Centralnego<br />
                Aktualizacja na dzień: <strong>{new Date(ratesData.meta.last_updated_at).toLocaleDateString('pl-PL')}</strong>
              </Paragraph>

              <FormFooter>* pola wymagane</FormFooter>
            </>
          ))}
      </Fieldset>
    </form>
  );
};

export default Form;