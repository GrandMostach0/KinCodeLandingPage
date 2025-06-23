import { PcIc } from "../assets/icons/Icons";
import CaracteristicaList from "./CaracteristicaList";
function Servicios() {

    return(
        <section className="division flex">

            <div className="flex-1/2 border">
                <span className="flex inel"><PcIc /> Nuestros Servicios </span>
                <h1>Soluciones Web Completas</h1>
                
                <p>Ofrecemos servicios integrales de desarrollo web, desde la conceptualización hasta el lanzamiento y mantenimiento. Tu éxito digital es nuestra prioridad.</p>

                <CaracteristicaList title="Desarrollo Frontend" description="Interfaces modernas y responsivas con React, Next.js y Tailwind CSS." />
                <CaracteristicaList title="Desarrollo Backend" description="APIs robustas y bases de datos optimizadas para máximo rendimiento." />
                <CaracteristicaList title="E-commerce" description="Tiendas online completas con sistemas de pago integrados." />

            </div>
            <div className="flex-1/2">
                <h1>nose</h1>
            </div>
        </section>
    )
}

export default Servicios;