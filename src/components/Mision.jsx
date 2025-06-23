import { BoltIc, CodeIc, PaintIc, SecurityIc } from "../assets/icons/Icons";
import CardMision from "./CardMision";
function Mision() {
    return(
        <section className="division">
            <div className="borde text-center flex flex-col items-center justify-center gap-2">
                <span className="tag"> <BoltIc /> Características Principales</span>
                <h1 className="text-5xl font-bold">Expertos en el Desarrollo Web</h1>
                <p className="w-[70%] text-lg font-semibold">Somos un equipo apasionado de desarrolladores y diseñadores que crea soluciones web innovadoras. Combinamos creatividad, tecnología de vanguardia y experiencia de usuario excepcional para llevar tu negocio al siguiente nivel digital.</p>
            </div>

            <div className="grid grid-cols-3 gap-10 w-[60%] m-auto mt-8">
                <CardMision childre={<CodeIc />} title="Código Limpio" description="Escribimos código mantenible, escalable y siguiendo las mejores prácticas de la industria" />
                <CardMision childre={<PaintIc />} title="Diseño Centrado" description="Cada decisión de diseño se basa en la experiencia del usuario y los objetivos de tu negocio."/>
                <CardMision childre={<SecurityIc />} title="Seguridad Total" description="Implementamos las mejores prácticas de seguridad para proteger tu sitio web y datos."/>
            </div>

        </section>
    )
}

export default Mision;