import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/Button';
import MeuInput from './components/Input'
import MenuLogin from './components/MenuLogin'

// Componente que irá ser renderizada no "body" do index.html
function App() {
  const [count, setCount] = useState(0)

  const CorBotao = {
    color: "white"
  };

  return (
    <>
      <div className='campo-login'>
        <MenuLogin />
      </div>
      <div className="card">
        <MeuInput />
        <MyButton />        
      </div>
      <hr />
      <div>
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
      
    </>
  )
}

export default App
