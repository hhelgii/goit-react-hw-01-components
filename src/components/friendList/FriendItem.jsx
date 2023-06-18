import css from './FriendItem.module.css';
import propTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
