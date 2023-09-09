import Image from "next/image"
import { ThumbnailProps } from "./thumbnail.props"
import { image_base } from "src/helpers/constants"
import ReactStars from "react-stars"
import { useInfoStore } from "src/store"


const Thumbnail = ({ movie, isBig = false}: ThumbnailProps) => {
  const { setModal, setCurrentMovie } = useInfoStore()
  const handleCurrentMovie = () => {
    setModal(true)
    setCurrentMovie(movie)
  }
  return (
    <div
      onClick={handleCurrentMovie}
    className={`relative ${isBig ? 'h-[430px] min-w-[600px]' :" h-[330px] min-w-[200px] cursor-pointer transition duration-200 ease-out md:h-[440px] md:min-w-[292px] md:hover:scale-110"} `}>

          <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={movie.title || 'photo'} fill className="rounded-sm object-cover md:rounded" />

       <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/40 w-full h-full"/>
      
      <div className="absolute bottom-4  left-4 right-2">
        <h1 className="text-xl font-bold md:text-2xl ">
          {movie?.title || movie?.name || movie?.original_title}</h1>

        <div className="flex items-center space-x-2">
          <ReactStars count={10} edit={false} value={movie.vote_average} color2={"#fff"} />
          <p>({movie.vote_count})</p>
        </div>
      </div>
      </div>
  )
}

export default Thumbnail