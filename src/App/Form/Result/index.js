import './style.css'

const Result = ({ result }) => {
  let content;

  if (!result.sourceAmount && result.selectedCurrency) {
    content = <p>Wprowadź poprawną liczbę w polu Kwota</p>;

  } else if (result.sourceAmount && !result.selectedCurrency) {
    content = <p>Wybierz walutę</p>;

  } else if (result.sourceAmount && result.selectedCurrency) {
    content = (
      <p>
         {result.sourceAmount} {result.selectedCurrency} = <strong>{result.amountToCurrency.toFixed(2)} PLN</strong>
      </p>
    );

  } else {
    content = "--Wynik--";
  }

  return <div className="result">{content}</div>;
};

export default Result;