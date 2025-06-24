import { useRef } from "react";
import { RocketIc } from "../assets/icons/Icons";

const Hero = () => {
    const textRef = useRef(null);
   
    return (
        <section
            className="text-center h-[80vh] flex flex-col items-center justify-center gap-5"
        >

            <span className="tag"> <RocketIc /> Desarrollo Web Profesional</span>

            <div className="w-[70%] pointer-events-none">
                <h1 className="text-6xl font-bold">Creamos <span className="degradado">Experiencias Web</span> Extraordinarias</h1>
                <p className="font-semibold text-2xl my-3">Transformamos tus ideas en sitios web modernos, rápidos y funcionales. Especialistas en desarrollo frontend y backend con las últimas tecnologías.</p>
            </div>

            <div>
                <a className="navItem py-2 px-3 rounded-lg border bg-blue-100 border-blue-400" href="">Solicitar Cotización</a>
                <a className="navItem py-2 px-3 rounded-lg border-2 border-gray-500" href="">Ver Portafolio</a>
            </div>

        </section>
    )
}

export default Hero;