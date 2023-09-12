import { FriendListItem } from './friendListItem';
import PropTypes from 'prop-types';
import { useStyles } from "./friendListStyles";

export const FriendList = ({ friends }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        key={id}
                    />
                ))}
            </ul>
        </div>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};