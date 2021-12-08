import Header from '../../sectioning/header/header'
import Footer from '../../sectioning/footer/footer'
import getNewFriends from '../../redux/actions/getNewFriends';
import { connect } from 'react-redux'

import './style.css';

function Redux({ friends, getNewFriends }) {

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>
  })

  const handleClick = () => {
    getNewFriends()
  }

  return (
     <div>
       <Header />
       <div className="about">
        <ul>{amigos}</ul>
        <button onClick={handleClick}>Get New Friends</button>
      </div>
        <Footer />
     </div>
  );
}

const mapDispatchToProps = {
  getNewFriends
}


// state lets us know its coming from the store
const mapStateToProps = state => ({
  friends: state.friends
})


export default connect(mapStateToProps, mapDispatchToProps)(Redux);
