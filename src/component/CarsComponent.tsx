import React, {FC} from 'react';
import {CarsItemsModule} from "../module/CarsItemsModule";
interface IProps{
    cars: CarsItemsModule[]
}
const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map(value => <div key={value.id}> {value.id} {value.brand}</div>)}
        </div>
    );
};

export default CarsComponent;