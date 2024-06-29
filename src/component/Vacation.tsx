import React, {FC} from 'react';
import TSVacation from "./TSVacation";
import "./styleVacatoin.css";

let divContent:HTMLElement=document.createElement('div')
divContent.classList.add('divContent')
document.body.appendChild(divContent)
const Vacation:FC<TSVacation> = ({name,classNameH2,image,alt,children})=> {
    const content = ()=>{
        divContent.innerHTML=`${children}`
    }
    return (
        <div>
            <h2 className={classNameH2}>{name}</h2>
            <img src={image} alt={alt}/>
            <div>
                <button
                    onClick={() => content()}>Детальніше
                </button>
            </div>
        </div>
    );
}
export default Vacation;