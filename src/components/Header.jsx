import { Link } from 'react-router-dom';
import {navLinks} from '../assets/links'
import * as lucid from 'lucide-react'
import Logo from './Logo.jsx';
import { useState } from 'react';
import Cta from './hero/Cta.jsx';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

return(
  <>
    {/* DESKTOP NAV */}
    <header className="hidden md:flex flex-row justify-between items-center px-3 py-1 border-b-muted border-b-1 opacity-90 sticky top-0 z-9990 text-white bg-dark shadow-md">
      <div className="flex gap-6">
        <Logo />
        <div className='border-muted border-1 bg-gray-700 px-2 rounded-4xl xl:flex hidden text-white justify-between w-md'>
          <span className='flex flex-row justify-between items-center'>
            <lucid.Search />
            <input type="search" placeholder='Search...' className='outline-none border-none' />
          </span>
          <span className='flex flex-row text-center text-sm justify-between items-center gap-1'>
            <span className='bg-dark rounded-4xl px-2'>Ctrl</span>
            <span className='bg-dark rounded-4xl px-2'>k</span>
          </span>
        </div>
      </div>
  
      <div className='text-white flex justify-around gap-5'>
        <nav className="flex gap-5 text-md font-medium ">
          {navLinks.map((link) => (
            <Link className='hover:overline hover:text-secondary' key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>
        <div className="h-7 w-px bg-gray-300" />
        <span className='xl:hidden'><lucid.Search /></span>
        <a href="https://github.com/mechseiko/heroship" target="_blank" rel="noreferrer"><lucid.Github className='hover:text-secondary' size={30}/></a>
        <a href="https://devseiko.vercel.app" target="_blank" rel="noreferrer"><lucid.MSquare className='hover:text-secondary' size={30}/></a>
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
