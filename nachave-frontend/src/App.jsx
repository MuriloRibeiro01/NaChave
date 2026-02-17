import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MainButton, SecondaryButton} from './components/Button';
import MeuInput from './components/Input'
import {MenuInput} from './components/MenuLogin'
import { NavBar } from './components/Navbar';
import Teste from './views/Teste'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import { Feed } from './views/Feed';
import { Login } from './views/Login';

// Componente que irá ser renderizada no "body" do index.html
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <Header />

        <main className='content'>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Teste" element={<Teste />} />
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