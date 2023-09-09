
import { IMovis } from 'src/interfaces/app.interface'

import {create} from 'zustand'

interface InfoState {
    modal:boolean
    currentMovie:IMovis
    setModal:(bool:boolean) => void
    setCurrentMovie: (movie: IMovis) => void
}


export const useInfoStore = create<InfoState>()(set =>({
    modal:false,
    currentMovie:{} as IMovis,
    setModal:(bool:boolean)=>set(state=>({...state, modal:bool})),
    setCurrentMovie: (movie: IMovis) => set(state =>({...state, currentMovie:movie}))
}))
