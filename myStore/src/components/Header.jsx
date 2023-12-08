import { Filters } from './Filters.jsx'
import './Header.css'


export function Header () {
  return (
    <header>
      <h1 className="neon-text"style={{color:"#ffffff",fontSize:"6rem", fontfamily: "'Dhurjati'",letterSpacing:"0.1rem",marginBottom:"4rem"}}>PRODUCTOS</h1>
      <Filters />
    </header>
  )
}
