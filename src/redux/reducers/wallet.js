// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FETCH_CURRENCIES_FAILURE, FETCH_CURRENCIES_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };

  case FETCH_CURRENCIES_FAILURE:
    return {
      ...state,
      error: action.error,
    };

  default:
    return state;
  }
};

export default wallet;

// import { USER_LOGIN } from '../actions/index';

// const INITIAL_STATE = {
//   currencies: [], // array de string
//   expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
//   editor: false, // valor booleano que indica de uma despesa está sendo editada
//   idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
// };

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case USER_LOGIN:
//     return {
//       ...state,
//       name: action.payload.name,
//       isLogged: action.payload.isLogged,
//     };
//   default:
//     return state;
//   }
// };

// export default userReducer;
