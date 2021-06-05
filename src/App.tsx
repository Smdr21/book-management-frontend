import logo from './logo.svg';
import './Styles/App.css'
import Header from './components/header';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Body from './components/Body';
import React, {useState,useEffect} from 'react'

function App() {

  const [toggleBooks, setToggleBooks] = useState(true);

  useEffect(()=>{
      console.log('TOGGLE BOOKS ',toggleBooks)
  },[toggleBooks]);
  
  return (
    <div className="App">
      <Header></Header>
      <NavBar showBooks={setToggleBooks}></NavBar>
      <Body toggleBooksList={toggleBooks}></Body>
      
      
    </div>
  );
}

export default App;
