import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <section className="profile-section">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </section>

      <section className="friends-section">
        <FriendList friends={friends} />
      </section>

      <section className="transactions-section">
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
};

export default App;
