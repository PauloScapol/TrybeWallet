export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_CURRENCIES_SUC = 'FETCH_CURRENCIES_SUC';
export const FETCH_CURRENCIES_FAIL = 'FETCH_CURRENCIES_FAIL';
export const USER_EXPENSES = 'USER_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';

// LOGIN
export const userLogin = (data) => ({ type: USER_LOGIN, payload: data });

// FETCHING ACTIONS
export const dataAPI = (data) => ({ type: FETCH_CURRENCIES_SUC, currencies: [...data] });
const failureAPI = (error) => ({ type: FETCH_CURRENCIES_FAIL, error });

// DESPESAS DO USUÁRIO
export const userExpenses = (data) => ({ type: USER_EXPENSES, expenses: [data] });

// EXCLUIR DESPESA DA STORE
export const removeExpenses = (id) => ({ type: REMOVE_EXPENSES, id });

// // EDITAR DESPESA DA STORE
// export const editExpenses = (id) => ({ type: EDIT_EXPENSES, id });

// REALIZANDO O FETCH NA API
export const requireAPI = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data);
    const regularCurrencies = currencies.filter((currency) => currency !== 'USDT');

    dispatch(dataAPI(regularCurrencies));
  } catch (error) {
    dispatch(failureAPI(error));
  }
};
