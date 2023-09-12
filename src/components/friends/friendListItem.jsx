import PropTypes from 'prop-types';
import { useStyles } from "./friendListStyles";
  
export const FriendListItem = ({ avatar, name, isOnline }) => {
    const classes = useStyles();
    return (
        <li className={classes.item}>
            <span className={classes.status} data-is-online={isOnline}></span>
            <img className={classes.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={classes.name}>{name}</p>
        </li>
    );
};
  
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};