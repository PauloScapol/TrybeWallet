import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  state = { totalExpenses: 0 };

  handleExpenses = () => {
    const { expenses } = this.props;
    const convertedCurrency = [];
    let total = 0;

    expenses.forEach((element) => {
      const { value, exchangeRates, currency } = element;
      const tradeValue = exchangeRates[currency];
      const currencyConversion = value * tradeValue.ask;

      convertedCurrency.push(currencyConversion);
    });

    if (convertedCurrency.length !== 0) {
      total = convertedCurrency.reduce((acc, cur) => acc + cur);
    }

    this.setState({
      totalExpenses: total,
    });
  };

  render() {
    const { totalExpenses } = this.state;

    return (
      <>
        <section>
          <Header totalExpenses={ totalExpenses } />
        </section>

        <section>
          <WalletForm handleExpenses={ this.handleExpenses } />
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.wallet,
});

Wallet.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
