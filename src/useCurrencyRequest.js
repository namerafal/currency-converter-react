import { useState, useEffect } from 'react';
import axios from 'axios';
import { CURRENCY_API } from './URL/currencyAPI';

const useCurrencyRequest = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });


  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(CURRENCY_API);        

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

  return ratesData;
};

export default useCurrencyRequest;
