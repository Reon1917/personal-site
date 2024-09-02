import React from 'react';
import Header from './components/header';
import MainContent from './components/main';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='bg-black'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;