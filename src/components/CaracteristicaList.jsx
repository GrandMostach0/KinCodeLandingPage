import { CheckIc } from "../assets/icons/Icons";

function CaracteristicaList({ title, description }){
    return(
        <div className="flex gap-2 py-2">
            <CheckIc/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CaracteristicaList;