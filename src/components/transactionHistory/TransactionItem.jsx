import propTypes from 'prop-types';
import css from './TransactionItem.module.css';
export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableCell}>{type}</td>
      <td className={css.tableCell}>{amount}</td>
      <td className={css.tableCell}>{currency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};
