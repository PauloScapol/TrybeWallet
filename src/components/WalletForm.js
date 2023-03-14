import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            {' '}
            <input
              data-testid="value-input"
              type="number"
              placeholder="0"
              name="value"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            {' '}
            <select data-testid="currency-input" name="currency">
              { currencies.map((coin, index) => (
                <option key={ index }>{coin}</option>
              ))}
            </select>
          </label>

          <label htmlFor="payment-method">
            Método de pagamento:
            {' '}
            <select data-testid="method-input" name="payment-method">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria (tag):
            {' '}
            <select data-testid="tag-input" name="tag">
              <option value="food">Alimentação</option>
              <option value="pleasure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>

          <label>
            Descrição:
            {' '}
            <input
              data-testid="description-input"
              type="text"
              placeholder="..."
              name="description"
            />
          </label>
        </form>
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
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
