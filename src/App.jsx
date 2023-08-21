import { useEffect } from 'react'
import './App.css'
import { Route , Routes} from 'react-router-dom'
import WebFont from 'webfontloader'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Ubuntu Mono" , "monospace","JetBrains Mono" ,"Product Sans" , "Droid Serif", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <>
    {/* <Header /> */}
      <Routes >
        <Route path='/' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
