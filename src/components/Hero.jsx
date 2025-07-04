import { useRef } from "react";
import { RocketIc } from "../assets/icons/Icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonsRef = useRef(null);

    useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1.2 } });

    tl.from(tagRef.current, { opacity: 0, filter: "blur(10px)", y: -20 })
      .from(titleRef.current, { opacity: 0, filter: "blur(10px)", y: 20 }, "-=0.8")
      .from(textRef.current, { opacity: 0, filter: "blur(10px)", y: 20 }, "-=0.7")
      .from(buttonsRef.current, { opacity: 0, filter: "blur(10px)", y: 20 }, "-=0.7");
  }, []);
    return (
        <section
            className="text-center h-[80vh] flex flex-col items-center justify-center gap-5"
        >

            <span ref={tagRef} className="tag"> <RocketIc /> Desarrollo Web Profesional</span>

            <div className="w-[90%] md:w-[70%] pointer-events-none">
                <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Creamos <span className="degradado">Experiencias Web</span> Extraordinarias</h1>
                <p ref={textRef} className="font-semibold text-lg sm:text-xl lg:text-2xl my-3">Transformamos tus ideas en sitios web modernos, rápidos y funcionales. Especialistas en desarrollo frontend y backend con las últimas tecnologías.</p>
            </div>

            <div ref={buttonsRef}>
                <a className="text-sm md:text-base navItem py-2 px-3 rounded-lg bg-gradient-to-r from-violet-800 to-fuchsia-500 text-white" href="">Solicitar Cotización</a>
                <a className="text-sm md:text-base navItem py-2 px-3 rounded-lg border-2 border-violet-800" href="">Ver Portafolio</a>
            </div>

        </section>
    )
}

export default Hero;