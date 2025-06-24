import { UsersIc, CodeIc, PaintIc, SecurityIc } from "../assets/icons/Icons";
import CardMision from "./CardMision";
function Mision() {
    return(
        <section className="division">
            <div className="borde text-center flex flex-col items-center justify-center gap-2">
                <span className="tag"> <UsersIc /> Nuestra Misión</span>
                <h1 className="titulo">Expertos en el Desarrollo Web</h1>
                <p className="w-[90%] md:w-[70%] text-lg sm:text-xl lg:text-2xl font-semibold">Somos un equipo apasionado de desarrolladores que creamos soluciones web innovadoras. Creatividad, tecnología y experiencia.</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 sm:gap-2 md:gap-8 w-full sm:w-[98%] m-auto mt-8">
                <CardMision childre={<CodeIc />} title="Código Limpio" description="Escribimos código mantenible, escalable y siguiendo las mejores prácticas de la industria" />
                <CardMision childre={<PaintIc />} title="Diseño Centrado" description="Cada decisión de diseño se basa en la experiencia del usuario y los objetivos de tu negocio."/>
                <CardMision childre={<SecurityIc />} title="Seguridad Total" description="Implementamos las mejores prácticas de seguridad para proteger tu sitio web y datos."/>
            </div>

        </section>
    )
}

export default Mision;