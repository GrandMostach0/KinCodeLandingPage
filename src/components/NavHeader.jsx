import logoKinCode from '../assets/logoKinCode.svg';
function NavHeader() {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-2 py-3 px-2 sticky top-0 bg-white/40 backdrop-blur-lg rounded-2xl z-20'>

            <div className='flex-1/6'>
                <img className='w-[80px]' src={logoKinCode} alt="Logo" />
            </div>

            <nav className='flex-1/2 text-right'>
                <a className='navItem text-sm md:text-base' href="">Servicios</a>
                <a className='navItem text-sm md:text-base' href="">Contacto</a>
                <a className='navItem text-sm md:text-base' href="">Comenzar Proyecto</a>
            </nav>
        </div>
    )
}

export default NavHeader;