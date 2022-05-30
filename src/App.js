import logo from './logo.svg';
import './App.css';
// import Home from './Homepage/Home';
import Home from './component/Home';
import { Component } from 'react';


import data from './back/Data/Data';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardDetail from './component/CardDetail'
import Cards from './component/Cards'
import {Router,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
     {/* <Home/> */}
     {/* <Menu/> */}
    
     {/* <Router>
       <Routes>
       <Route exact path="/" element={<Home/>} />
        <Route exact path="Menu" element={<Menu/>} />
       </Routes>
     </Router> */}
      <Header/>
      
     <Routes>
     <Route path="/" element={<Home/>} />
   <Route  path='/Cards' element={< Cards /> }/>
   <Route path='/cart/:id' element={< CardDetail /> }/>
</Routes>

    </div>
  );
}

export default App;
{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}