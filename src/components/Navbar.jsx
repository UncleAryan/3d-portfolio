import { useEffect, useState } from "react"
import { motion } from "framer-motion"
const LINKS = [
    { label: 'about', href: '#about'},
    { label: 'skills', href: '#skills'},
    { label: 'projects', href: '#projects'},
    { label: 'experience', href: '#experience'},
    { label: 'contact', href: '#contact'},
]

export default function NavBar() {
    // track user scroll so we know when to change background
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        // motion.nav is animated version of nav
        <motion.nav 
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 100,
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: scrolled ? 'rgba(5, 8, 16, 0.9)' : 'transparent', // change background on scroll state
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid #1e2535' : '1px solid transparent',
                transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s', // blur animation
            }} 
        >

            <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.2rem',
            color: 'var(--accent)',
            letterSpacing: '-0.02em'}}> &lt; Aryan Panchal /&gt; </span>

            <div style={{display: 'flex', gap: '2rem'}}>
                {LINKS.map(link => (
                <a
                    key={link.href}
                    href={link.href}
                    style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s',}}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                > {link.label} </a> ))}
            </div>    

        </motion.nav>
    )
}