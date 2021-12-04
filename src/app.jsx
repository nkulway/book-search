import { Routes, Route } from 'react-router';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header'
import Main from './sectioning/main/main';
import Search from './routes/search/search'
import './app.css';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
