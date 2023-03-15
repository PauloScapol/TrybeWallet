// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FETCH_CURRENCIES_SUC, FETCH_CURRENCIES_FAIL, USER_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_SUC:
    return {
      ...state,
      currencies: action.currencies,
    };

  case FETCH_CURRENCIES_FAIL:
    return {
      ...state,
      error: action.error,
    };

  case USER_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, ...action.expenses],
    };

  default:
    return state;
  }
};

export default wallet;
