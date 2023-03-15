import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requireAPI, userExpenses } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requireAPI(dispatch));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleBtn = async () => {
    const { dispatch, handleExpenses } = this.props;

    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const apiData = await request.json();

    const expenses = {
      ...this.state,
      exchangeRates: { ...apiData },
    };

    dispatch(userExpenses(expenses));

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
    }), () => handleExpenses());
  };

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;

    return (
      <div>

        <label htmlFor="value">
          Valor:
          {' '}
          <input
            data-testid="value-input"
            type="number"
            placeholder="0"
            onChange={ this.handleChange }
            name="value"
            value={ value }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          {' '}
          <select
            data-testid="currency-input"
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
          >
            { currencies.map((element, index) => (
              <option
                key={ index }
                value={ element }
              >
                {element}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="payment-method">
          Método de pagamento:
          {' '}
          <select
            data-testid="method-input"
            onChange={ this.handleChange }
            name="method"
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria/tag:
          {' '}
          <select
            data-testid="tag-input"
            onChange={ this.handleChange }
            name="tag"
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label>
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            type="text"
            placeholder="..."
            onChange={ this.handleChange }
            name="description"
            value={ description }
          />
        </label>

        <button onClick={ this.handleBtn }>Adicionar despesa</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.wallet,
});

WalletForm.propTypes = {
  currencies: PropTypes.array,
  expenses: PropTypes.array,
  editor: PropTypes.bool,
  idToEdit: PropTypes.number,
  handleExpenses: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
