import { RowDowAskIc } from "../assets/icons/Icons";
function Acordion({ pregunta, respuesta, isOpen, onClick }) {
    return (
        <div className="text-xl border border-gray-300 bg-white/50 rounded-lg mb-4 px-3 py-3">
            <div className="flex justify-between items-center cursor-pointer select-none hover:text-violet-900 hover:underline" onClick={onClick}>
                <h3 className="font-semibold text-base sm:text-lg lg:text-xl">¿{pregunta}?</h3>
                 <span
                    className={`transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                    <RowDowAskIc />
                </span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="mt-2 text-sm sm:text-base md:text-lg border-t-1 py-1 border-t-gray-200">{respuesta}</p>
            </div>
        </div>
    );
}

export default Acordion;