import logoKinCode from '../assets/logoKinCode.svg';
import { Link } from 'react-scroll';
function NavHeader() {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-2 py-3 px-2 sticky top-0 sm:top-2 sm:w-[90%] m-auto bg-white/10 backdrop-blur-lg rounded-2xl z-20'>

            <div className='flex-1/6'>
                <img className='w-[80px]' src={logoKinCode} alt="Logo" />
            </div>

            <nav className='flex-1/2 text-right'>
                <Link to='servicios' className='navItem text-sm md:text-base cursor-pointer' smooth={true} duration={500} offset={-10} >Servicios</Link>
                <Link to='contacto' className='navItem text-sm md:text-base cursor-pointer' smooth={true} duration={500} offset={-70} >Contacto</Link>
                <a className='navItem text-sm md:text-base' href="tel:+529994552047">Comenzar Proyecto</a>
            </nav>
        </div>
    )
}

export default NavHeader;