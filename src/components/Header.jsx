import { Link } from 'react-router-dom';
import * as lucid from 'lucide-react'
import Logo from './Logo.jsx';
import { useState } from 'react';
import Cta from './hero/Cta.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/docs", label: "Docs" },
    { to: "/hero", label: "Hero" },
    { to: "/support", label: "Support" },
  ];

return(
  <>
    {/* DESKTOP NAV */}
    <header className="hidden md:flex flex-row justify-between items-center px-3 py-1 border-b-muted border-b-1 opacity-90 sticky top-0 z-9990 text-white bg-dark shadow-md">
      <Logo />
      <div className='text-white flex justify-around gap-5 items-center'>
        <nav className="flex gap-5 text-md font-medium ">
          {navLinks.map((link) => (
            <Link className='hover:overline hover:text-secondary' key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>
        <a href="https://github.com/mechseiko/heroship" target="_blank" rel="noreferrer"><lucid.Github className='hover:text-secondary' size={30}/></a>
        <a href="https://devseiko.vercel.app" target="_blank" rel="noreferrer"><lucid.MSquare className='hover:text-secondary' size={30}/></a>
          <div className="h-7 w-px bg-gray-300" />
        <Cta flex={"row"} />
      </div>
    </header>

    {/* MOBILE NAV*/}
      <header className="md:hidden xl:hidden 2xl:hidden flex flex-col justify-center px-3 py-1 border-b-muted border-b-1 sticky top-0 z-9990 text-white bg-dark shadow-md">
        <div className='flex justify-between text-center items-center'>
          <Logo />
          <div className='flex gap-x-3'>
            <lucid.Search />
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <lucid.X size={28} />: <lucid.Menu size={28} />}
            </button>
          </div>
          
        </div>
        
        
        {isOpen && (            
            <ul className="*:mb-6 *:mt-4 justify-center text-center items-center">
              <hr />
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className=""
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              <hr />
              
              <Cta flex={"col"}/>
            </ul>
        )}
      </header>
  </>
)
};

export default Header;
