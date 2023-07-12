const  api_key= process.env.NEXT_PUBLIC_API_KEY as string

const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string

export const API_REQUEST ={
    top_rated: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`,
     trending: `${base_url}/trending/all/week?api_key=${api_key}&language=en-US`,
    tv_top_Rated: `${base_url}/tv/top_rated?api_key=${api_key}&language=en-US` ,
    movie_popular: `${base_url}/movie/popular?api_key=${api_key}&language=en-US`, 
    Family: `${base_url}/movie/10751/similar?api_key=${api_key}&language=en-US`,
    Comedy: `${base_url}/movie/35/similar?api_key=${api_key}&language=en-US`,
    Documentary: `${base_url}/movie/99/similar?api_key=${api_key}&language=en-US`,
    Horror: `${base_url}/movie/27/similar?api_key=${api_key}&language=en-US`,
}
