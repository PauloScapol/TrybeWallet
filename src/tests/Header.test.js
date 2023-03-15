import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

afterEach(() => jest.clearAllMocks());

describe('2. Crie um header para a página de carteira contendo as seguintes características', () => {
  test('O elemento com o data-testid="email-field" renderiza o email salvo no estado global', () => {
    const { store } = renderWithRouterAndRedux(<Wallet />);
    const emailField = screen.getByTestId('email-field');

    expect(emailField.innerHTML).not.toBe('');
    expect(emailField).toContainHTML(store.getState().user.email);
  });

  // test('O elemento com o data-testid="total-field" inicialmente renderiza o valor 0', () => {
  //   renderWithRouterAndRedux(<Wallet />);

  //   const totalField = screen.getAllByTestId('total-field');
  //   const INITIAL_VALUE = 0;

  //   expect(totalField).toBe(INITIAL_VALUE);
  // });

  test('O elemento com o data-testid="header-currency-field renderiza o texto BRL', () => {
    renderWithRouterAndRedux(<Wallet />);

    const exchangeField = screen.getByTestId('header-currency-field');

    expect(exchangeField).toBeInTheDocument();
    expect(exchangeField).toContainHTML('BRL');
  });
});
