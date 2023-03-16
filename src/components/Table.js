import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpenses } from '../redux/actions';

// https://www.w3schools.com/tags/tag_tbody.asp

class Table extends Component {
  handleRemoveBtn = ({ target }, value) => {
    const { dispatch, handleExpenses } = this.props;
    dispatch(removeExpenses(target.id));
    handleExpenses(value);
  };

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table width="100%">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>

          <tbody>
            { expenses.map((expense) => (
              <tr key={ expense.id } id={ expense.id }>
                {/* <td>{ expense.id + 1 }</td> */}
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ (expense.value * 1).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                {/* <td>{ expense.exchangeRates[expense.currency].code }</td> */}
                <td>
                  { (expense.exchangeRates[expense.currency].ask * 1).toFixed(2) }
                </td>
                <td>
                  { (expense.value * (expense.exchangeRates[expense.currency].ask))
                    .toFixed(2) }
                </td>
                <td>BRL</td>
                <td>
                  <button className="edit-btn">Editar</button>
                  <button
                    className="delete-btn"
                    data-testid="delete-btn"
                    onClick={ (e) => this.handleRemoveBtn(
                      e,
                      (expense.value * (expense.exchangeRates[expense.currency].ask))
                        .toFixed(2),
                    ) }
                    id={ expense.id }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.wallet,
});
Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Table);
