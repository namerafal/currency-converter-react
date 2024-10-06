import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrencyRequest = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });


  useEffect(() => {
    const fetchRates = async () => {
      try {

        const response = await axios.get('currencies.json');
        // const response = await axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_FVxTKQHW27c4Yi5Ksu20Ymx7ihSW6YKRrdg11jmS&currencies=EUR%2CUSD%2CCAD%2CGBP&base_currency=PLN');

        const { meta, data } = response.data;
        setRatesData({
          state: "success",
          data,
          meta,
        });

      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 2000);

  }, []);

  return { rates, date, loading, error };
};

export default useCurrencyRequest;
