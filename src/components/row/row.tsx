import { useRef, useState } from "react"
import Thumbnail from "../thumbnail/thumbnail"
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { Rowprops } from "./row.props"

const Row = ({title, movies, isBig = false}:Rowprops) => {
  
   
 const [moved, setmoved] = useState<boolean>(false)
  const caruselRef = useRef<HTMLDivElement>(null)

  const hendleClick = (direction:'left'|'right') => {
       setmoved(true);
     if(caruselRef.current){
  const { scrollLeft,clientWidth} = caruselRef.current;

  const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
  caruselRef.current.scrollTo({left:scrollTo ,behavior:'smooth'})
  if(direction === 'left' && scrollTo < 0){
    setmoved(false)
  }
 }
  }
  return (
    <div className=" md:h-[600px] space-y-3 md:space-y-2">
     <h2 className="w-56 cursor-pointer text-lg md:text-2xl mt-4 md:mt-0 font-semibold text-[#e5e5e5e] hover:text-white transiton duration-200">{title}</h2>
     {/* carusel*/}

     <div className=" group relative md:ml-2"> 
        <AiFillCaretLeft className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 duration-200 hover:scale-125
        ${!moved && 'hidden'}`} 
          onClick={() => hendleClick("left")}/>
       
        <div ref={caruselRef} className={`flex scrollbar-hide  items-center ${!isBig && 'space-x-1  md:space-x-4'} overflow-hidden overflow-x-scroll`}>
        {movies.map(movie=>(
          <Thumbnail key={movie.id} movie={movie} isBig={isBig}/>
        ))} 
       </div>

        <AiFillCaretRight className="absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 duration-200 hover:scale-125" 
          onClick={() => hendleClick('right')} />
       
     </div>
    </div>
  )
}

export default Row