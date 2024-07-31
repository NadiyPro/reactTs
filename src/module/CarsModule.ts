import {CarsItemsModule} from "./CarsItemsModule";
import {IPaginatedModel} from "./IPaginatedModel";

export interface CarsModule{
    total_items: number,
    total_pages: number,
    prev: IPaginatedModel | null,
    next: IPaginatedModel | null,
    items: CarsItemsModule[]
}