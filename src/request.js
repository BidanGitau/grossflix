const request = {
fetchTrendingMovies: `trending/all/week?api_key=${process.env.REACT_APP_GROSSFLIX_API}`,
fetchNetflixOriginals: `discover/tv?api_key=${process.env.REACT_APP_GROSSFLIX_API}&with_networks=213`,
fetchTopRatedMovies: `movie/top_rated?api_key=${process.env.REACT_APP_GROSSFLIX_API}`, 
fecthActionMovies: `discover/movie?api_key=${process.env.REACT_APP_GROSSFLIX_API}&with_genres=28`,
fetchComedyMovies:  `discover/movie?api_key=${process.env.REACT_APP_GROSSFLIX_API}&with_genres=35`,
fecthHororMovies: `discover/movie?api_key=${process.env.REACT_APP_GROSSFLIX_API}&with_genres=27`,
fetchRomance: `discover/movie?api_key=${process.env.REACT_APP_GROSSFLIX_API}&with_genres=10749`,
fecthDocumentariesMovies: `discover/movie?api_key=${process.env.REACT_APP_GROSSFLIX_API}&with_genres=99`,

}
export default request
