import React from 'react';

import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <NavBar
          title='Text Coveter'
          about='About us'
        />
        <main className='flex-grow'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <TextForm heading='Your Text Converter - Simplify, Transform, and Optimize' />
              }
            />
          </Routes>
        </main>
       <Footer/>
      </div>
    </Router>
  );
};

export default App;
