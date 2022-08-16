//import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css';
import Container from './pages/Container'
//import Spinner from './components/Spinner'
import Movie from './pages/Movie'
import Director from './pages/Director'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return(
  <div className="" >
  <Header/>
<Router>
<Routes>
 <Route path='/' element={<Container/>}/>
 <Route path='/Movie/:id' element={<Movie/>}/>
 <Route path='/Director/:id' element={<Director/>}/>
 <Route path='*' element={<NotFound/>}/>
 </Routes>
</Router>
<Footer/>
</div>
  );
}
export default App;
