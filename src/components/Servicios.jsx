import { PcIc } from "../assets/icons/Icons";
import CaracteristicaList from "./CaracteristicaList";
import MobileDesing from "../assets/datos.webp";
import SplitText2 from "../TextAnimations/SplitText/SplitText2";
function Servicios() {

    return(
        <section id="servicios" className="division flex flex-col md:flex-row items-center gap-4">

            <div className="flex-1/2 py-2 px-4">
                <span className="inline-flex gap-2 items-center justify-center px-4 py-1 sm:py-2 text-xs md:text-sm rounded-lg border border-fuchsia-400/50 bg-gradient-to-l from-violet-400/30 from-25% via-fuchsia-400/30 via-100% text-fuchsia-800 font-semibold"> <PcIc /> Nuestros Servicios</span>
                
                <h1 className="titulo">Soluciones Web Completas</h1>
                <SplitText2 
                    text="Ofrecemos servicios integrales de desarrollo web, desde la conceptualización hasta el lanzamiento y mantenimiento. Tu éxito digital es nuestra prioridad."
                    className="py-2 text-lg md:text-xl text-left"
                    delay={40}
                    duration={0.4}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40}}
                    to={{ opacity: 1, y: 0}}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                />

                <CaracteristicaList title="Desarrollo Frontend" description="Interfaces modernas y responsivas con React, Next.js y Tailwind CSS." />
                <CaracteristicaList title="Desarrollo Backend" description="APIs robustas y bases de datos optimizadas para máximo rendimiento." />
                <CaracteristicaList title="E-commerce" description="Tiendas online completas con sistemas de pago integrados." />

            </div>
            <div className="flex-1/2 py-2 px-4">
                <img src={MobileDesing} alt="Celular" className="object-cover h-[250px] sm:h-[350px] lg:h-[450px]"/>
            </div>
        </section>
    )
}

export default Servicios;