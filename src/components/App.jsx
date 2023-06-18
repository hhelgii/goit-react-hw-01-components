import { Profile } from './profile/Profile';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import { FriendList } from './friendList/FriendList';
import { Statistics } from './statistics/Statistics';

import data from './data/data.json';
import user from './data/user.json';
import transactions from './data/transactions.json';
import friends from './data/friends.json';

export const App = () => {
  return (
    <>
      <Profile userData={user} />
      <FriendList friends={friends} />
      <Statistics title="User statistics" data={data} />
      <TransactionHistory items={transactions} />
    </>
  );
};
