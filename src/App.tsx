import logo from './logo.svg';
import './Styles/App.css'
import Header from './components/header';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Body></Body>
      
      
    </div>
  );
}

export default App;
