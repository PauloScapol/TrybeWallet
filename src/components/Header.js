import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;

    return (
      <header>
        <div data-testid="email-field" className="wallet-header-email">
          Email:
          {' '}
          {email}
        </div>

        <div className="total-expenses-text">
          Despesa Total: R$
        </div>

        <div data-testid="total-field" className="total-expenses">
          {totalExpenses.toFixed(2)}
        </div>

        <div data-testid="header-currency-field" className="wallet-header-currency">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
});

Header.propTypes = {
  email: PropTypes.string,
  totalExpenses: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
