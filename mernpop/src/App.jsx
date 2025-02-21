
import './App.css'
import Home from './components/functionalCompo/Home.jsx'
import Contact from './components/functionalCompo/Contact.jsx'
import About from './components/functionalCompo/About.jsx'
import Signup from './components/functionalCompo/Signup.jsx'
import Navbar from './components/functionalCompo/Navbar.jsx'
import UseEffect from './components/functionalCompo/hooks/UseEffect.jsx'
import UseState from './components/functionalCompo/hooks/UseState.jsx'
import Login from './components/functionalCompo/Login.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseEffectAPI from './components/functionalCompo/hooks/UseEffectAPI.jsx'
import UseRef from './components/functionalCompo/hooks/UseRef.jsx'
import UseMemo from './components/functionalCompo/hooks/UseMemo.jsx'
import UseCallback from './components/functionalCompo/hooks/UseCallback.jsx'
import UseMemoize from './components/functionalCompo/hooks/UseMemoize.jsx'
import HoC from './components/functionalCompo/HoC/HoC.jsx'

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
          <Route path='/hoc' element={<HoC/>}></Route>          
          <Route path='/use-effect' element={<UseEffect/>}></Route>
          <Route path='/use-state' element={<UseState/>}></Route>
          <Route path='/use-effect-api' element={<UseEffectAPI/>}></Route>  
          <Route path='/use-ref' element={<UseRef/>}></Route>  
          <Route path='/use-memo' element={<UseMemo/>}></Route>  
          <Route path='/use-callback' element={<UseCallback/>}></Route> 
          <Route path='/use-memoize' element={<UseMemoize/>}></Route>          
   
          <Route path='/login' element={<Login/>}></Route>
          
          
          </Routes></BrowserRouter>
       
       
      </main>
  )
}

export default App