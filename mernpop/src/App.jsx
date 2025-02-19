
import './App.css'
import Home from './components/functionalCompo/Home.jsx'
import Contact from './components/functionalCompo/Contact.jsx'
import About from './components/functionalCompo/About.jsx'
import Signup from './components/functionalCompo/Signup.jsx'
import Navbar from './components/functionalCompo/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
      <main>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home properties="Hello" sjit="SJIT"/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          </Routes></BrowserRouter>
       
       
      </main>
  )
}

export default App