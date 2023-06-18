import propTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';
export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => {
           return (<StatisticsItem
            key={id}
            label={label}
            percentage={percentage}
          />);
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  data: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
