import PropTypes from 'prop-types';
import { useStyles } from "./profileStyles";

export const Profile = ({username, tag, location, avatar, stats}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img className={classes.avatar} src={avatar} alt="User avatar" width={'150px'} />
            <div className={classes.infoWrapper}>
                <div className={classes.description}>
                    <h2 className={classes.username}>{username}</h2>
                    <h3 className={classes.tag}>@{tag}</h3>
                    <p className={classes.location}>{location}</p>
                </div>
                <ul className={classes.stats}>
                    <li className={classes.statsItem}>
                        <span className="label">Followers</span>
                        <span className="quantity">{stats.followers}</span>
                    </li>
                    <li className={classes.statsItem}>
                        <span className="label">Views</span>
                        <span className="quantity">{stats.views}</span>
                    </li>
                    <li className={classes.statsItem}>
                        <span className="label">Likes</span>
                        <span className="quantity">{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
};