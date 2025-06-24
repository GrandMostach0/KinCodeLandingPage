import logoKinCode from '../assets/logoKinCode.svg';
function NavHeader() {
    return (
        <div className='flex items-center justify-between py-3 px-10 sticky top-0 bg-white/40 backdrop-blur-lg rounded-2xl z-20'>

            <div className='flex-1/2'>
                <img className='w-[10%]' src={logoKinCode} alt="Logo" />
            </div>

            <nav>
                <a className='navItem' href="">Servicios</a>
                <a className='navItem' href="">Contacto</a>
                <a className='navItem' href="">Comenzar Proyecto</a>
            </nav>
        </div>
    )
}

export default NavHeader;