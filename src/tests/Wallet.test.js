import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

afterEach(() => jest.clearAllMocks());

describe('Página da Carteira', () => {
  const testEmail = 'email@email.com';
  const testPassword = '123456';

  test('A rota para esta página deve ser /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-button');

    userEvent.type(email, testEmail);
    expect(email).toHaveValue(testEmail);

    userEvent.type(password, testPassword);
    expect(password).toHaveValue(testPassword);

    userEvent.click(button);

    expect(history.location.pathname).toBe('/carteira');
  });

  test('O totalExpenses é atualizado cada vez que uma nova despesa é adicionada', async () => {
    const { store } = renderWithRouterAndRedux(<Wallet />);

    const expenseValue = screen.getByTestId('value-input');
    userEvent.type(expenseValue, '100');

    const expenseDescription = screen.getByTestId('description-input');
    userEvent.type(expenseDescription, 'Teste');

    const expenseBtn = screen.getByRole('button', { name: 'Adicionar despesa' });
    userEvent.click(expenseBtn);

    const expenseTotal = screen.getByTestId('total-field');

    await waitFor(() => {
      const updatedStore = store.getState();
      const expenseStore = updatedStore.wallet.expenses[0];
      const exchangeRate = expenseStore.exchangeRates[expenseStore.currency];
      const totalExpense = expenseStore.value * exchangeRate.ask;
      const totalExpenseString = `${totalExpense.toFixed(2)}`;

      expect(expenseTotal.innerHTML).toBe(totalExpenseString);
    });
  });
});
