import { useState } from 'react';
import Modal from '../modal/modal'
import'./style.css'

function Search() {

    const [ fieldData, setFieldData ] = useState({
        author: null,
        title: null
    });
    // TODO refactor this later since we have two responses 
    const [ response, setResponse ] = useState(null);
    // const [ description, setDescription ] = useState(null);
    const [ bookDescription, setBookDescription ] = useState(null);

    const handleChange = e => {
        const value = e.target.value;
        const type = e.target.id;
        
        const fieldDataCopy = Object.assign({}, fieldData, {
            ...fieldData
        })

        if (type === 'author') {
            fieldDataCopy.author = value;
        } else {
            fieldDataCopy.title = value;
        }
        console.log(fieldDataCopy)
        setFieldData(fieldDataCopy)

        console.log(fieldData)
    }

    

    const renderResponse = books => {
        const listOfBooks = books.map((book, index) => {
            return <li data-bookId={book.key} key={index}>{book.title} by {book.author_name}</li>
        })
        setResponse(listOfBooks)
    }

    // const renderDescription = details => {
    //     let str = (<span>{details}</span>)
    //     setDescription(str)
    // }
    
    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://openlibrary.org/search.json?author=${fieldData.author}&limit=10`)
        .then(result => result.json())
        .then(data => renderResponse(data.docs))
        .catch(err => console.log(err))
    }
    const handleClick = e => {
        e.preventDefault();
        let target = (e.target.getAttribute('data-bookId'))
        console.log(target)
        fetch(`https://openlibrary.org${target}.json`)
        .then(result => result.json())
        // .then(data => renderDescription(data.description))
        .then(data => setBookDescription(data.description))
        .catch(err => console.log(err))
    }

    const closeModal = () => {
        setBookDescription(null);
    }

  return (
      <>
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
    {response && (
        <div className="results">
        <h2>Search Results</h2>
        <ul className="results__books" onClick={handleClick}>{response}</ul>
        <br></br>
        <h2>About the Book You Chose</h2>
        {/* <div>{description}</div> */}
        </div>
    )}
    {bookDescription && ( <Modal descirption={bookDescription} closeModal={closeModal} />)}
    </>
  );
}

export default Search;
