import Header from '../../sectioning/header/header'
import Footer from '../../sectioning/footer/footer'
import { connect } from 'react-redux'

import './style.css';

function Redux({ friends }) {

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>
  })


  return (
     <div>
       <Header />
       <div className="about">
        <ul>{amigos}</ul>
      </div>
        <Footer />
     </div>
  );
}

const mapStateToProps = state => ({
  friends: state.friends
})

export default connect(mapStateToProps)(Redux);
