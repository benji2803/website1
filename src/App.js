// App.js - Main Application File
import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
