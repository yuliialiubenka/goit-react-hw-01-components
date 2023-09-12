import PropTypes from 'prop-types';
import { useStyles } from "./statisticsStyles";
import { getRandomHexColor } from './getRandomHexColor';

export const Statistics = ({ title = null, stats }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {title !== null && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes.list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={classes.listItem} key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span className={classes.label}>{label}</span>
              <span className={classes.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};