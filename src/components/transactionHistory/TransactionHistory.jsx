import propTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHeader}>
        <tr className={css.tableRow}>
          <th className={css.tableCell}>Type</th>
          <th className={css.tableCell}>Amount</th>
          <th className={css.tableCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              amount={amount}
              type={type}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
