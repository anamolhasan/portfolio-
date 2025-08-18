
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='min-h-screen overflow-hidden  text-white'>
      
        <Navbar />
   
      <main>
        <Outlet />
      </main>

      <footer >footer</footer>
    </div>
  )
}

export default App
