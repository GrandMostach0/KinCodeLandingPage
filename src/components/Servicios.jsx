import { PcIc } from "../assets/icons/Icons";
import CaracteristicaList from "./CaracteristicaList";
function Servicios() {

    return(
        <section className="division flex gap-4">

            <div className="flex-1/2 py-2 px-4">
                <span className="inline-flex gap-2 items-center justify-center px-2 border text-sm rounded-lg"> <PcIc /> Nuestros Servicios</span>
                <h1 className="font-bold text-5xl">Soluciones Web Completas</h1>
                
                <p className="py-2 text-xl">Ofrecemos servicios integrales de desarrollo web, desde la conceptualización hasta el lanzamiento y mantenimiento. Tu éxito digital es nuestra prioridad.</p>

                <CaracteristicaList title="Desarrollo Frontend" description="Interfaces modernas y responsivas con React, Next.js y Tailwind CSS." />
                <CaracteristicaList title="Desarrollo Backend" description="APIs robustas y bases de datos optimizadas para máximo rendimiento." />
                <CaracteristicaList title="E-commerce" description="Tiendas online completas con sistemas de pago integrados." />

            </div>
            <div className="flex-1/2 py-2 px-4 border">
                <h1>nose</h1>
            </div>
        </section>
    )
}

export default Servicios;