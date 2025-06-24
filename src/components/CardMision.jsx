
function CardMision({childre, title, description}){
    return(
        <div className="rounded-xl py-4 px-6 bg-white shadow-xl hover:scale-105 select-none">
            <p className="inline-block py-2 px-2">{childre}</p>
            <h1 className="font-bold text-lg">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default CardMision;