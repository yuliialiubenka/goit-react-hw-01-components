import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friends/friendList';
import { TransactionHistory } from './transactions/transactions';
import userData from '../data/user.json';
import friendsData from '../data/friends.json';
import statisticsData from '../data/statistics.json';
import transactionsData from '../data/transactions.json';
import { useStyles } from "./appStyles";

export const App = () => {
  const classes = useStyles();
  return (
    <>
    <section className={classes.section}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </section>
    <section className={classes.section}>
      <Statistics 
        title="Upload stats"
        stats={statisticsData}
      />
    </section>
    <section className={classes.section}>
      <FriendList
        friends={friendsData}
      />
    </section>
    <section className={classes.section}>
      <TransactionHistory
        transactions={transactionsData}
      />
    </section>
    </>
  );
};
