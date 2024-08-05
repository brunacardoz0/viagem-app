#jsx

// Header.jsx
import React from 'react';

const Header = () => {
  return <header><h1>Aplicativo de Viagens</h1></header>;
};

export default Header;

// Footer.jsx
import React from 'react';

const Footer = () => {
  return <footer><p>
 2024 Viagem App</p></footer>;
};

export default Footer;

// App.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Outros componentes virão aqui */}
      <Footer />
    </div>
  );
}

export default App;