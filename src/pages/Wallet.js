import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  state = { totalExpenses: 0 };

  handleExpenses = (removedExpense) => {
    const { expenses } = this.props;
    const { totalExpenses } = this.state;

    if (removedExpense) {
      const updatedExpenses = totalExpenses - removedExpense;

      this.setState({
        totalExpenses: updatedExpenses,
      });

      return;
    }

    if (expenses.length > 0) {
      const mappedExpenses = expenses
        .map((expense) => expense.value * (expense.exchangeRates[expense.currency].ask));
      const total = mappedExpenses.reduce((acc, cur) => acc + cur);

      this.setState({
        totalExpenses: total,
      });

      return;
    }

    this.setState({
      totalExpenses: 0,
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

        <section>
          <Table handleExpenses={ this.handleExpenses } />
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
