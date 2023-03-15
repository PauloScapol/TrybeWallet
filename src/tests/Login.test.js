import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWith';

afterEach(() => jest.clearAllMocks());

describe('1. Crie uma página inicial de login com os seguintes campos e características', () => {
  test('A rota para esta página deve ser /', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
  });

  test('É renderizado um elemento para que o usuário insira seu email e senha', () => {
    renderWithRouterAndRedux(<Login />);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('É renderizado um botão com o texto "Entrar"', () => {
    renderWithRouterAndRedux(<Login />);

    const button = screen.getByText('Entrar');

    expect(button).toBeInTheDocument();
  });

  describe('Foram realizadas as seguintes verificações nos campos de email, senha e botão', () => {
    // test('Se é um e-mail no formato válido e uma senha com mínimo 6 caracteres, botão é habilitado', () => {
    //   renderWithRouterAndRedux(<Login />);

    //   const email = screen.getByTestId('email-input');
    //   const password = screen.getByTestId('password-input');
    //   const button = screen.getByRole('button', { name: 'Entrar' });

    //   userEvent.type(email, 'email@hotmail.com');
    //   userEvent.type(password, '123456');
    //   expect(button).toBeEnabled();
    // });

    // test('Desabilita o botão Entrar caso e-mail e/ou senha estiverem no formato inválido e Habilita o botão Entrar caso e-mail e senha sejam válidos', () => {
    //   renderWithRouterAndRedux(<App />);

    //   const button = screen.getByRole('button', { name: 'Entrar' });

    //   userEvent.type(email, 'é.[e[]]}@hotmail.com');
    //   userEvent.type(password, '123456');
    //   expect(button).toBeDisabled();
    // });
  });

  // test('Salva o email no estado da aplicação, com a chave email, assim que o usuário logar', () => {
  //   const { store } = renderWithRouterAndRedux(<App />);
  //   const email = screen.getByTestId('email-input');
  //   const password = screen.getByTestId('password-input');
  //   const button = screen.getByText('Entrar');

  //   expect ?
  // });

  // test('A rota é alterada para "/carteira" após o clique no botão', () => {
  //   const { history } = renderWithRouterAndRedux(<App />);
  //   const email = screen.getByTestId('email-input');
  //   const password = screen.getByTestId('password-input');
  //   const button = screen.getByText('Entrar');

  //   userEvent.type(email);
  //   userEvent.type(password);
  //   fireEvent.click(button);

  //   expect(history.location.pathname).toBe('/carteira');
  // });
});
