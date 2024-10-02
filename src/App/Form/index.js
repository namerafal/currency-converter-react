import { useState } from 'react';
import { LabelText, FieldInput, SelectOption1, Paragraph, Button, FormFooter } from './styled';
import Result from './Result';
import DateClock from './Clock';

const Form = ({ calculateResult, date, rates, result, currencyRate, setResult, setCurrencyRate }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(""); 

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
    setCurrencyRate(null);
  };

  return (
    <form onSubmit={onFormSubmit}>      
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

              {Object.keys(rates).map((short) => (
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
        <Result result={result} currencyRate={currencyRate} />

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
          Aktualizacja na dzień: <strong>{date}</strong>
        </Paragraph>

        <FormFooter>* pola wymagane</FormFooter>
      {/* </Fieldset> */}
    </form>
  );
};

export default Form;