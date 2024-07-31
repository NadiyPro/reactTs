import {CarsItemsModule} from "./CarsItemsModule";

export interface CarsModule{
    total_items: number
    total_pages: number
    prev: string
    next: string
    items: CarsItemsModule[]
}