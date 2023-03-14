export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';

const failureAPI = (error) => ({ type: FETCH_CURRENCIES_FAILURE, error });

export const userLogin = (payload) => ({ type: USER_LOGIN, payload });

export const dataAPI = (payload) => ({ type: FETCH_CURRENCIES_SUCCESS, payload });

export const requireAPI = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data);
    const regularCurrencies = currencies.filter((coin) => coin !== 'USDT');
    dispatch(dataAPI(regularCurrencies));
  } catch (error) {
    dispatch(failureAPI(error));
  }
};
