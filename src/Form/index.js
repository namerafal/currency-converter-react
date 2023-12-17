import './style.css';
import { currencies } from '../Currencies';
const Form = ({ amount, currency, onAmountChange,
  onSelectChange, calculateResult, result, resetForm }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label>
            <span className="form__labelText">
              *Kwota obcej waluty:
            </span>
            <input
              className="form__field"
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
            <span className="form__labelText">
              *Wybierz walutę:
            </span>
            <select
              className="form__field form__field--select"
              value={currency}
              onChange={onSelectChange}
            >
              <option className="form__field--option1" value=""
              >
                --Wybierz walutę--
              </option>
              {currencies.map(({ short, name }) => (
                <option key={short} value={short}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraphHeader">Wynik to koszt waluty w stosunku do PLN:</p>
        <p className="form__result">{result}</p>
        <div className='buttons'>
          <>
            <button
              className="form__button"
              type="submit"
            >
              PRZELICZ
            </button>
            <button
              onClick={resetForm}
              className="form__button"
            >
              WYCZYŚĆ
            </button>
          </>
        </div>
        <footer className="form__footer">* pola wymagane</footer>
      </fieldset>
    </form>
  );
};

export default Form;