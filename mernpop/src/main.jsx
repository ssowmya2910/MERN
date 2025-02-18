import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About/>
    <Projects/>
    <Skills/>
    <Home/>
    <Contact/>
  </StrictMode>,
)
