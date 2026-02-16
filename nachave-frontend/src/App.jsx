import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MainButton, SecondaryButton} from './components/Button';
import MeuInput from './components/Input'
import {MenuInput} from './components/MenuLogin'

// Componente que irá ser renderizada no "body" do index.html
function App() {
  const [count, setCount] = useState(0)

  const CorBotao = {
    color: "white"
  };

  return (
    <>
      <div className='campo-login'>
        <MenuInput/>
      </div>
      <hr />      
    </>
  )
}

export default App

// No momento, o App.jsx está sendo usado para estudos e testes.
// Futuramente, ele será usado com o devido propósito de coordenar o sistema.
// Nele conterá: Rotas, Provedores de Contexto, Layout Persistente.