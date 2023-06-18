import css from './StatisticsItem.module.css';
import propTypes from 'prop-types';
import { getRandomPastelColor } from 'additionalFunctions/randomColor';
export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomPastelColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes={
    label:propTypes.string.isRequired,
    percentage:propTypes.number.isRequired
}