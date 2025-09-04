import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const Footer = () => {
  const date = new Date().getFullYear();
  
  return (
    <>
      <footer className="bg-dark border-t-muted border-t-1 text-center text-white">
        <div className="flex flex-col gap-10 p-5 text-center items-center">
          <div className="flex flex-col items-center text-center justify-center max-w-xl">
            <div className='mb-3'><Logo /></div>
            <p className="text-md">
              Heroship allows you to create stunning website hero sections in just minutes. Simply answer a few questions and instantly generate a beautiful, ready-to-use hero design.
            </p>
          </div>
        </div>
        <h3 className='pb-2'>{date === 2025 ? "© Heroship 2025." : "© Heroship 2025–{date}."}</h3>
      </footer>

      <footer className="flex space-x-3 justify-center bg-gray-700 text-center p-1 text-sm text-white">
        <p>Developed by <a className='hover:overline text-accent' href="https://devseiko.vercel.app" target="_blank" rel="noopener">MECHSEIKO</a></p>
        <div>-</div>
        <p>Deployed with <a className='hover:overline text-accent' href="https://appwrite.io" target="_blank" rel="noopener">Appwrite</a></p>
      </footer>
    </>
  );
};

export default Footer;