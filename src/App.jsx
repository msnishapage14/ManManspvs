import React from 'react';
import 'tailwindcss/tailwind.css';
import Nav from './Nav';
import Menu from './Menu';
import Footer from './Footer';
import Feature from './Feature';
import Test from './Test';
import Carousel from './Carousel' 

function App() {
  return (
    <div>
      <Nav />
      <Menu />
      <Carousel />
      <Feature />
      <Test />
      <Footer />
      

      {/* <Hero />
        <Features />
        <Footer /> */}
    </div>
  );
}

export default App;
