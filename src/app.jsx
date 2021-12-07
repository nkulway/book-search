import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header'
import Main from './sectioning/main/main';
import './app.css';


function App() {
  return (
    <div className="App">
      <div className="y-sticky">
        <Header /> 
        <Main />
        <Footer />
        </div>       
    </div>
  );
}

export default App;
