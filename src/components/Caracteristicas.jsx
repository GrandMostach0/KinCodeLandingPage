import { useRef, useState, useEffect } from "react";
import { BoltIc, UsersIc, SecurityIc, ResponsiveIc } from "../assets/icons/Icons";
import CardMision from "./CardMision";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Caracteristicas() {

    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const cardsRef = useRef([]);
    const containerRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.3,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useGSAP(
        () => {
            if (!isVisible) return;

            const ctx = gsap.context(() => {
                const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

                tl.from([tagRef.current, titleRef.current, textRef.current], {
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                });

                tl.from(cardsRef.current, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.15,
                }, "-=0.5");
            }, containerRef);

            return () => ctx.revert();
        },
        { dependencies: [isVisible] }
    );

    cardsRef.current = [];

    return(
        <section ref={containerRef} className="division">
            <div className="borde text-center flex flex-col items-center justify-center gap-2">
                <span ref={tagRef}  className="tag"> <BoltIc /> Características Principales</span>
                <h1 ref={titleRef} className="titulo">Expertos en el Desarrollo Web</h1>
                <p ref={textRef} className="w-full md:w-[70%] text-lg sm:text-xl lg:text-2xl font-semibold">Descubre las características que hacen de nuestros servicios la elección perfecta para empresas que buscan destacar en el mundo digital.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8 py-8">
                {[
                    {
                        icon: <ResponsiveIc />,
                        title: "Diseño Responsivo",
                        desc: "Sitios web que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla."
                    },
                    {
                        icon: <BoltIc />,
                        title: "Carga Rápida",
                        desc: "Optimización para tiempos de carga súper rápidas."
                    },
                    {
                        icon: <SecurityIc />,
                        title: "Seguridad",
                        desc: "Certificados SSL, protección contra malware y copias de seguridad automáticas."
                    },
                    {
                        icon: <UsersIc />,
                        title: "Soporte Continuo",
                        desc: "Mantenimiento, actualizaciones y soporte técnico las 24 horas."
                    }
                ].map((card, i) => (
                    <div
                        key={i}
                        ref={el => cardsRef.current[i] = el} // <- conectamos la ref aquí
                    >
                        <CardMision childre={card.icon} title={card.title} description={card.desc} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Caracteristicas;