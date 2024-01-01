import React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Banner from './Banner/Banner';
import RowPost from './RowPost/RowPost';
import {action,originals} from './urls'



function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost  url={originals} title='Netflix originals'/>
      <RowPost url={action} title='Action' isSmall />
    </div>
  )
}

export default App