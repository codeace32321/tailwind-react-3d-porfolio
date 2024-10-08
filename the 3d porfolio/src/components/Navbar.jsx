import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white item-center justify-center flex font-bold shadow-md">
        <p className='bluegradient_text'>MJ</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink to="/home" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Contact
          </NavLink>
          <NavLink to="/project" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Project
          </NavLink>
        </nav>
    </header>
  )
}

export default Navbar