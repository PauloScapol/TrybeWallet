import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;

    return (
      <header>
        <h3 data-testid="email-field" className="wallet-header-email">
          Email:
          {' '}
          {email}
        </h3>

        <h3 className="total-expenses-text">
          Despesa Total: R$
        </h3>

        <h3 data-testid="total-field" className="total-expenses">
          {totalExpenses.toFixed(2)}
        </h3>

        <h2 data-testid="header-currency-field" className="wallet-header-currency">
          BRL
        </h2>
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
