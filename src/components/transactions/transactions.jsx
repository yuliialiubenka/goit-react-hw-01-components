import PropTypes from 'prop-types';
import { useStyles } from "./transactionsStyles";

export const TransactionHistory = ({ transactions }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr className={classes.tableRow}>
            <th className={classes.tableHeader}>Type</th>
            <th className={classes.tableHeader}>Amount</th>
            <th className={classes.tableHeader}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr className={classes.tableRow} key={id}>
              <td className={classes.tableData}>{type}</td>
              <td className={classes.tableData}>{amount}</td>
              <td className={classes.tableData}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  };
  
  TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };