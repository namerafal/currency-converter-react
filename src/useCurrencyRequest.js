import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrencyRequest = () => {
  const [rates, setRates] = useState({});
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(async () => {
            const response = await axios.get('currencies.json');
            // const response = await axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_FVxTKQHW27c4Yi5Ksu20Ymx7ihSW6YKRrdg11jmS&currencies=EUR%2CUSD%2CCAD%2CGBP&base_currency=PLN');
            resolve(response);
          }, 1000)
        );

        const data = response.data;
        setRates(data.data);

        const dateObject = new Date(data.meta.last_updated_at);
        const formattedDate = dateObject.toLocaleDateString('pl-PL');
        setDate(formattedDate);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { rates, date, loading, error };
};

export default useCurrencyRequest;
