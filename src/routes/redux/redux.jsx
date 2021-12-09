import { useState } from "react";
import getNewFriends from "../../redux/actions/getNewFriends";
import { connect } from "react-redux";

import "./style.css";

function Redux({ friends, getNewFriends }) {
  const [newFriend, setNewFriend] = useState(null);

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>;
  });

  const handleClick = () => {
    getNewFriends([newFriend]);
  };

  const handleChange = (e) => {
    setNewFriend(e.target.value);
  };

  return (
    <div>
      <div className="about">
        <ul>{amigos}</ul>
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>Get New Friends</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  getNewFriends,
};

// state lets us know its coming from the store
const mapStateToProps = (state) => ({
  friends: state.friends,
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
