import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import NotFoundImage from '../assets/notFound.png';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <Header />
          <Link to="/"><img src={NotFoundImage} className='w-full h-[90vh]' alt="Page Not Found" /></Link>
    <Footer />
  </>
);

export default NotFound;
