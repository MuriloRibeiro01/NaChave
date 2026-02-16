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
      <div className="card">
        <MeuInput />       
      </div>
      <hr />
      <div>
        <MainButton>Teste</MainButton>
      </div>
      
    </>
  )
}

export default App
