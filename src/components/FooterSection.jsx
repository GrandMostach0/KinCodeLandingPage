import logoKinCode from "../assets/logoKinCode.svg"
import { FacebookIc, WhatssappIc } from "../assets/icons/Icons";

function FooterSection() {
    return(
        <footer className="bg-gradient-to-t from-violet-500 to-slate-200 flex flex-col sm:flex-row justify-between px-10 pt-5 pb-3 gap-10">
            <section className="flex-1/2 text-sm">
                <img src={logoKinCode} alt="logoKinCode" className="w-[100px] mb-2"/>
                
                <p>Creamos experiencias web extraordinarias que impulsan el crecimiento de tu negocio. Especialistas en desarrollo web moderno y funcional.</p>

                <div className="flex items-center gap-5 mt-5">
                    <a className="px-3 py-1 rounded-lg bg-blue-900 text-white" href=""><FacebookIc /></a>
                    <a className="px-3 py-1 rounded-lg bg-blue-900 text-white" href="tel:+529994552047"><WhatssappIc /></a>
                </div>
            </section>

            <section className="flex-1/2 text-sm">
                <h2 className="font-bold mb-2">Servicios</h2>

                <p>Desarrollo Web</p>
                <p>E-commerse</p>
                <p>Mantenimineto</p>
                <p>Actualizaciones</p>

            </section>

            <section className="flex-1/2 text-sm">
                <h2 className="font-bold mb-2">Contacto</h2>

                <p>kinCode@gmail.com</p>
                <p>+52 999 455 2047</p>
                <p>Mérida, Yucatán</p>

            </section>
        </footer>
    )
}

export default FooterSection;