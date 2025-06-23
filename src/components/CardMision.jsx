
function CardMision({childre, title, description}){
    return(
        <div className="border rounded-lg py-3 px-4">
            <p className="inline-block py-2 px-2">{childre}</p>
            <h1 className="font-bold text-lg">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default CardMision;