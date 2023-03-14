import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    totalExpense: 0.00,
    currency: 'BRL',
    currencySymbol: 'R$',
  };

  render() {
    const { email } = this.props;
    const { totalExpense, currency, currencySymbol } = this.state;

    return (
      <header>
        <div data-testid="email-field" id="wallet-header-email">
          Email:
          {' '}
          {email}
        </div>

        <div data-testid="total-field" id="wallet-header-DT">
          Despesa Total:
          {' '}
          {currencySymbol}
          {totalExpense}
        </div>

        <div data-testid="header-currency-field" id="wallet-header-currency">
          {currency}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
