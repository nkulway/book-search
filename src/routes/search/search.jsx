import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { executeSearch } from "../../redux/actions/actions";
import Modal from "../../components/modal/modal";
import { createListOfBooks } from "../../utils"
import "./style.css";

function Search({ executeSearch, results }) {

  const [fieldData, setFieldData] = useState({
    author: null,
    title: null,
  });

  const [bookDescription, setBookDescription] = useState(null);
  const [listOfBooks, setListOfBooks] = useState('')

useEffect(() => {
    const listOfBooks = createListOfBooks(results)
    setListOfBooks(listOfBooks)
}, [results])

  const handleChange = (e) => {
    const value = e.target.value;
    const type = e.target.id;

    const fieldDataCopy = Object.assign({}, fieldData, {
      ...fieldData,
    });

    if (type === "author") {
      fieldDataCopy.author = value;
    } else {
      fieldDataCopy.title = value;
    }
    setFieldData(fieldDataCopy);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    executeSearch(fieldData.author, fieldData.title);
  };
  const handleClick = (e) => {
      e.preventDefault();
        let target = e.target.getAttribute("data-bookid");
        fetch(`https://openlibrary.org${target}.json`)
           .then((result) => result.json())
           // .then(data => renderDescription(data.description))
           .then((data) => setBookDescription(data.description))
           .catch((err) => console.log(err));
       };


  const closeModal = () => {
    setBookDescription(null);
  };

  return (
    <>
      <div className="center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__field">
            <label htmlFor="author">Author</label>
            <input id="author" type="text" onChange={handleChange} />
          </div>
          <div className="form__field">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
        {results.length > 0 && (
          <div className="results">
            <h2>Search Results</h2>
            <ul className="results__books" onClick={handleClick}>
              {listOfBooks}
            </ul>
            <br></br>
            <h2>About the Book You Chose</h2>
          </div>
        )}
        {bookDescription && (
          <Modal descirption={bookDescription} closeModal={closeModal} />
        )}
      </div>
      <Outlet />
    </>
  );
}

const mapDispatchToProps = {
  executeSearch,
};

const mapStateToProps = state => ({
    results: state.searchResults
})


export default connect(mapStateToProps, mapDispatchToProps)(Search);
