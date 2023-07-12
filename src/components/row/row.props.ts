import { IMovis } from "src/interfaces/app.interface";

export interface Rowprops{
    title:string
    movies:IMovis[]
    isBig?:boolean
}