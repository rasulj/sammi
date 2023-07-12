import Image from "next/image";
import { Heroprops} from "./hero.props";
import { useEffect , useState} from 'react'
import { IMovis } from "src/interfaces/app.interface";
import { image_base } from "src/helpers/constants";
import { TbPlayerPlay } from 'react-icons/tb';
import ReactStars from 'react-stars'

  
const Hero = ({trending}:Heroprops):JSX.Element => {
              
    const [movie, setMovie] = useState<IMovis>({}as IMovis);


    const rendomMoves = trending[Math.floor (Math.random() * trending.length)]
   
     
    useEffect(()=>{
      
      setMovie(rendomMoves)
    },[trending])

  return (
    <div className="flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:center">
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-full ">
        <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={movie.title || 'photo'} fill className="object-cover" />
      </div>

      <div className="py-[4px] text-center px-[8px] bg-[#e5e5e5]/50  w-[111px] rounded-bl-[8px] rounded-tr-[8px]"> 
      {movie.media_type}</div>
      
      <div className="flex items-center space-x-2">
        <ReactStars count={10} edit={false} value={movie.vote_average} color2={"#fff"}/>
       <p>({movie.vote_count})</p>
      </div>
      
       <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
         {movie?.title || movie?.name ||movie?.original_title}</h1>
     <p className=" max-w-xs md:max-w-lg text-shadow-md lg:max-w-2xl text-xs md:text-lg lg:text-2xl">
      {movie?.overview?.slice(0,100)}...</p>

     <div className="">
        <button className="flex justify-center items-center bg-white/60 font-bold text-black w-[200px] h-[56px] rounded-full"> 
        <TbPlayerPlay className=" h-5 w-5 md:h8 md:w-8"/> Watch now</button>
     </div>
    </div>
  )
}

export default Hero