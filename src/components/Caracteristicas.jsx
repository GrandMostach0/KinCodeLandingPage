import { BoltIc, UsersIc, SecurityIc, ResponsiveIc } from "../assets/icons/Icons";
import CardMision from "./CardMision";
function Caracteristicas() {
    return(
        <section className="division">
            <div className="borde text-center flex flex-col items-center justify-center gap-2">
                <span className="tag"> <BoltIc /> Características Principales</span>
                <h1 className="text-5xl font-bold">Expertos en el Desarrollo Web</h1>
                <p className="w-[70%] text-xl font-semibold">Descubre las características que hacen de nuestros servicios la elección perfecta para empresas que buscan destacar en el mundo digital.</p>
            </div>

            <div className="grid grid-cols-4 gap-7 py-8">
                <CardMision childre={<ResponsiveIc />} title="Diseño Responsivo" description="Sitios web que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla."/>
                <CardMision childre={<BoltIc />} title="Carga Rápida" description="Optimización para tiempos de carga supar rapídas."/>
                <CardMision childre={<SecurityIc />} title="Seguridad" description="Certificados SSL, protección contrá malware y copias de seguridad automaticas."/>
                <CardMision childre={<UsersIc />} title="Soporte Continuo" description="Mantenimiento, actualizaciónes y soporte técnico las 24 horas."/>
            </div>
        </section>
    )
}

export default Caracteristicas;