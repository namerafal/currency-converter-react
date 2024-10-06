import { ResultStyle } from './styled';

const Result = ({ result }) => {
  let content;

  if (!result.sourceAmount && result.selectedCurrency) {
    content = <p>Wprowadź poprawną liczbę w polu Kwota...!</p>;

  } else if (result.sourceAmount && !result.selectedCurrency) {
    content = <p>Wybierz walutę!</p>;

  } else if (result.sourceAmount && result.selectedCurrency) {
    content = (
      <p>
        {result.sourceAmount} PLN = <strong> {result.amountToCurrency.toFixed(2)} {result.selectedCurrency} </strong>
      </p>
    );

  } else {
    content = "--Wynik--";
  }

  return <ResultStyle>{content}</ResultStyle>;
};

export default Result;