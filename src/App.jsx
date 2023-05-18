import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import {AnimatedRoutes} from './AnimatedRoutes'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <AnimatedRoutes />
    </BrowserRouter>
    
    </>
  )
}

export default App
