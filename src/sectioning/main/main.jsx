import { connect } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import About from '../../routes/about/about'
import Login from '../../routes/login/login'
import Modal from '../../components/modal/modal'
import Search from '../../routes/search/search'
import './style.css';

function Main({ modalMessage }) {

  return (
      <main>
        <Routes>
        I am main
        <Route path="/" element={<p>Welcome Home</p>} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />}>
          <Route path=":id" element={<p>Some ID has been found</p>} />
        </Route>
        <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
        {/* if there is a modal message go ahead and render the modal
        and send the modal down as a prop */}
        {modalMessage && (
          <Modal />
        )}
      </main>
  );
}

const mapStateToProps = state => ({
  modalMessage: state.modal.message
})


export default connect(mapStateToProps, null)(Main);
