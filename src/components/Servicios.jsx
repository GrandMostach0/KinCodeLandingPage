import { PcIc } from "../assets/icons/Icons";
import CaracteristicaList from "./CaracteristicaList";
import MobileDesing from "../assets/datos.webp";
function Servicios() {

    return(
        <section className="division flex items-center gap-4">

            <div className="flex-1/2 py-2 px-4">
                <span className="inline-flex gap-2 items-center justify-center px-4 py-2 text-sm rounded-lg border border-fuchsia-400/50 bg-gradient-to-l from-violet-400/30 from-25% via-fuchsia-400/30 via-100% text-fuchsia-800 font-semibold"> <PcIc /> Nuestros Servicios</span>
                
                <h1 className="font-bold text-5xl">Soluciones Web Completas</h1>
                
                <p className="py-2 text-xl">Ofrecemos servicios integrales de desarrollo web, desde la conceptualización hasta el lanzamiento y mantenimiento. Tu éxito digital es nuestra prioridad.</p>

                <CaracteristicaList title="Desarrollo Frontend" description="Interfaces modernas y responsivas con React, Next.js y Tailwind CSS." />
                <CaracteristicaList title="Desarrollo Backend" description="APIs robustas y bases de datos optimizadas para máximo rendimiento." />
                <CaracteristicaList title="E-commerce" description="Tiendas online completas con sistemas de pago integrados." />

            </div>
            <div className="flex-1/2 py-2 px-4">
                <img src={MobileDesing} alt="Celular" className="h-[500px] object-cover"/>
            </div>
        </section>
    )
}

export default Servicios;