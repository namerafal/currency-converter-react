import './style.css';

const Form = (props) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legent">Kalkulator walut</legend>
      <p>
        <label>
          <span className="form__labelText">
            *Kwota obcej waluty:
          </span>
          <input className="form__field" name="amount" type="number" min="0.25" step="0.01" placeholder="Wpisz kwotę" />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            *Wybierz walutę:
          </span>
          <select className="form__field form__field--select" name="currency">
            <option className="form__field--option1" selected>--Wybierz walutę--</option>
            <option value="EUR">Euro</option>
            <option value="USD">Dolar amerykański</option>
            <option value="GBP">Funt brytyjski</option>
          </select>
        </label>
      </p>
      <p className="form__paragraphHeader">Wynik to koszt waluty w stosunku do PLN:</p>
      <p className="form__result">--Wynik--</p>
      <p>
        <button className="form__button">PRZELICZ</button>
        <button type="reset" className="form__button">WYCZYŚĆ</button>
      </p>
      <footer className="form__footer">* pola wymagane</footer>
    </fieldset>
  </form>
);

export default Form;