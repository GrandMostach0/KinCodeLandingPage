import { useState } from "react";
import { UsersIc } from "../assets/icons/Icons";
import Acordion from "./Acordion";
function Preguntas() {
    const [openIndex, setOpenIndex] = useState(null);

    const listasPreguntas = [
        
        {
            pregunta: "Cuál es el proceso de ustedes",
            respuesta: "Nuestro proceso incluye: 1) Consulta inicial gratuita, 2) Análisis de requerimientos y propuesta, 3) Diseño y prototipado, 4) Desarrollo y pruebas, 5) Revisiones y ajustes, 6) Lanzamiento y capacitación. Mantenemos comunicación constante durante todo el proceso.",
        },
        {
            pregunta: "Cuánto tiempo toma desarrollar un sitio Web",
            respuesta: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que proyectos más complejos como e-commerce o aplicaciones web pueden requerir 6-12 semanas. Siempre proporcionamos un cronograma detallado antes de comenzar.",
        },
        {
            pregunta: "Qué técnologías utilizan para el desarrollo",
            respuesta: "Utilizamos las tecnologías más modernas y confiables del mercado: React, Next.js, Node.js, TypeScript, Tailwind CSS, y bases de datos como PostgreSQL y MongoDB. También trabajamos con WordPress y otras plataformas según las necesidades del cliente.",
        },
        {
            pregunta: "Ofrecen servicios de mantenimineto y soporte",
            respuesta: "Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, copias de respaldo, monitoreo del sitio, y soporte técnico. También proporcionamos 3 meses de soporte gratuito después del lanzamiento de cualquier proyecto.",
        },
        {
            pregunta: "Trabajan con empresas de cualquier tamaño",
            respuesta: "Sí, trabajamos con startups, pequeñas empresas, medianas empresas y corporaciones. Adaptamos nuestros servicios y precios según el tamaño y necesidades específicas de cada cliente. Tenemos soluciones para todos los presupuestos.",
        },
    ]

    return(
        <section className="division">
            <div className="borde text-center flex flex-col items-center justify-center gap-2">
                <span className="tag"> <UsersIc /> FAQ</span>
                <h1 className="titulo">Preguntas Frecuentes</h1>
                <p className="w-full md:w-[70%] text-lg sm:text-xl lg:text-2xl font-semibold">Resolvemos las dudas más comunes sobre nuestros servicios de desarrollo web.</p>
            </div>

            <div className="w-[95%] md:w-[70%] m-auto mt-10">
                {listasPreguntas.map((ask, index) => (
                    <Acordion
                        key={index}
                        pregunta={ask.pregunta}
                        respuesta={ask.respuesta}
                        isOpen = {openIndex === index}
                        onClick = {() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="mb-5">¿Tienes más preguntas?</p>
                <a className="border px-3 py-2 bg-gradient-to-r from-violet-800 to-fuchsia-500 text-white rounded-lg" href="">Contactar a Nuestro Equipo</a>
            </div>

        </section>
    )
}

export default Preguntas;