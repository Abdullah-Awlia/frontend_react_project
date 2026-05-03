import './Styles/App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Quotes from './Components/Quotes'
import Footer from './Components/Footer'
import About from './Components/About'
import Skills from './Components/Skills'
import Trigger from "./Components/Trigger.jsx"


function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Quotes />
            <Skills />
            <Trigger />
            <Footer />
        </>
    )
}

export default App
