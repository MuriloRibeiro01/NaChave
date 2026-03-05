import './App.css'      
import { NavBar }         from './components/Navbar';
import Teste              from './views/Teste'
import Footer             from './components/Footer'
import Header             from './components/Header'
import { Routes, Route }  from 'react-router-dom';
import { Feed }           from './views/Feed';
import { Login }          from './views/Login';

// Componente que irá ser renderizada no "body" do index.html
function App() {

  return (
    <>
      <div className='app-container'>
        <Header />

        <main className='content'>
          <Routes>
            <Route path="/"       element={<Feed />} />
            <Route path="/Login"  element={<Login />} />
            <Route path="/Teste"  element={<Teste />} />
          </Routes>
        </main>
        
        <Footer />
        <NavBar />
      </div>  
    </>
  )
}

export default App

// No momento, o App.jsx está sendo usado para estudos e testes.
// Futuramente, ele será usado com o devido propósito de coordenar o sistema.
// Nele conterá: Rotas, Provedores de Contexto, Layout Persistente.