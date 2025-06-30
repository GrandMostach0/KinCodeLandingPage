import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
function Presencia() {
    return (
        <section id="contacto" className="px-4 text-center py-20 mb-10">
             <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.3}
                delay={0.3}
            >
                <div className="">
                    <h1 className="titulo">¿Listo para Transformar tu Presencia Digital?</h1>
                    <p className="m-auto w-full md:w-[70%] text-lg sm:text-xl lg:text-2xl font-semibold my-6">Únete a cientos de empresas que ya han revolucionado su negocio con nuestros servicios de desarrollo web. Tu éxito digital comienza aquí.</p>

                    <div className="flex flex-col sm:flex-row item-center justify-center gap-2">
                        <a className="text-sm sm:text-base md:text-lg border py-2 sm:px-4 rounded-lg bg-gradient-to-r from-violet-800 to-fuchsia-500 text-white" href="tel:+529994552047">Comenzar Proyecto Ahora</a>

                        <a className="text-sm sm:text-base md:text-lg border py-2 sm:px-4 rounded-lg border-violet-400 hover:bg-violet-400 hover:text-white" href="tel:+529994552047"> Agendar Consulta Gratuita </a>
                    </div>
                </div>
            </AnimatedContent>
            
        </section>
    )
};

export default Presencia;