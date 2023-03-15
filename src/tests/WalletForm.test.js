import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

afterEach(() => jest.clearAllMocks());

describe('3. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características', () => {
  test('O campo para adicionar o valor da despesa possui o data-testid="value-input"', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = await screen.getByTestId('value-input');

    expect(valueInput).toBeInTheDocument();
  });

  test('O campo para adicionar a descrição da despesa possui o data-testid="description-input"', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const descriptionInput = await screen.getByTestId('description-input');

    expect(descriptionInput).toBeInTheDocument();
  });

  // test('O campo para selecionar em qual moeda será registrada a despesa possui o data-testid="currency-input"', async () => {
  //   const { store } = renderWithRouterAndRedux(<Wallet />);
  //   const currencyInput = await screen.findByRole('combobox', { name: /moeda/i });
  //   const currencyOpt = within(currencyInput).getAllByRole('option');
  //   const currencyOptValues = currencyOpt.map((coinOpt) => coinOpt.value);
  //   const expectedCurrencyOpt = store.getState().wallet.currencies;

  //   expect(currencyOptValues).toEqual(expectedCurrencyOpt);
  //   expect(currencyInput).toBeInTheDocument();
  // });

  test('O campo para selecionar qual método de pagamento será utilizado possui o data-testid="method-input e options com os valores Dinheiro, Cartão de crédito e Cartão de débito', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const methodInput = await screen.findByTestId('method-input');
    const moneyMethod = screen.getByText('Dinheiro');
    const creditMethod = screen.getByText('Cartão de crédito');
    const debitMethod = screen.getByText('Cartão de débito');

    expect(methodInput).toBeInTheDocument();
    expect(moneyMethod).toBeInTheDocument();
    expect(creditMethod).toBeInTheDocument();
    expect(debitMethod).toBeInTheDocument();
  });

  test('O campo para selecionar uma categoria (tag) da despesa possui o data-testid="tag-input e options com os valores Alimentação, Lazer, Trabalho, Transporte e Saúde', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const tagInput = await screen.findByTestId('tag-input');
    const foodTag = screen.getByText('Alimentação');
    const pleasureTag = screen.getByText('Lazer');
    const workTag = screen.getByText('Trabalho');
    const transportationTag = screen.getByText('Transporte');
    const healthTag = screen.getByText('Saúde');

    expect(tagInput).toBeInTheDocument();
    expect(foodTag).toBeInTheDocument();
    expect(pleasureTag).toBeInTheDocument();
    expect(workTag).toBeInTheDocument();
    expect(transportationTag).toBeInTheDocument();
    expect(healthTag).toBeInTheDocument();
  });
});
