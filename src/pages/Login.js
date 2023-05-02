import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions';
import '../styles/Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleClick = async () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(userLogin(email));
    history.push('/carteira');
  };

  emailValidate = () => {
    const { email } = this.state;
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; // https://uibakery.io/regex-library/email
    if (regex.test(email)) return true;
  };

  render() {
    const { password } = this.state;
    const minLength = 6;

    return (
      <div>
        <form>
          <h1>Faça seu Login</h1>

          <label htmlFor="email">
            <input
              data-testid="email-input"
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={ (event) => this.setState({ email: event.target.value }) }
            />
          </label>

          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="password"
              placeholder="Senha"
              name="password"
              onChange={ (event) => this.setState({ password: event.target.value }) }
            />
          </label>

          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ (password.length < minLength
              || !this.emailValidate()) }
            onClick={ () => this.handleClick() }
          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);
