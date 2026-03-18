import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

export default function App() {
    return (
        <>
            <NavBar />

            <main>
                <Hero />

                <div style={
                    {
                        height: '200px',
                        background: 'linear-gradient(to bottom, transparent, var(--bg))',
                        marginTop: '-200px',
                        position: 'relative',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }
                } />

                <About/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Contact/>
            </main>
        </>
    )
}
