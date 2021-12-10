import { useState } from "react";
import { addNewFriend } from "../../redux/actions/addNewFriend";
import { connect } from "react-redux";

import "./style.css";

function Redux({ friends, addNewFriend }) {
  const [newFriend, setNewFriend] = useState('');

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>;
  });

  const handleClick = () => {
    addNewFriend(newFriend);
    setNewFriend('')
  };

  const handleChange = (e) => {
    setNewFriend(e.target.value);
  };

  return (
    <div>
      <div className="about">
        <ul>{amigos}</ul>
        <input onChange={handleChange} type="text" value={newFriend} />
        <button onClick={handleClick}>Get New Friends</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addNewFriend,
};

// state lets us know its coming from the store
const mapStateToProps = (state) => ({
  friends: state.friends,
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
