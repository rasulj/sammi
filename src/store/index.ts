import { IMovis } from 'src/interfaces/app.interface'
import {create} from 'zustand'


interface InfoState {
    modal:boolean
    movie:IMovis
    setModal:(bool:boolean) => void
    setMovie: (movie: IMovis) => void
}
export const useInfoStore = create<InfoState>()(set =>({
    modal:false,
    movie: {} as IMovis,
    setModal:(bool:boolean) => set(state=>({...state, modal:bool})),
    setMovie: (movie: IMovis) => set(state => ({ ...state, movie:movie}))
}))