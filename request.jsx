const apikey='08d01410b885c73582e9e50354581960'
const request={
    trending:`/trending/all/week?api_key=${apikey}&language=en-US`,
    netflixoriginal:`/discover/tv?api_key=${apikey}&with_networks=213`,
    toprated:`/movie/top_rated?api_key=${apikey}&language=en-US`,
    action:`/discover/movie?api_key=${apikey}&with_genres=28`,
    comedy:`/discover/movie?api_key=${apikey}&with_genres=35`,
    horror:`/discover/movie?api_key=${apikey}&with_genres=27`,
    romance:`/discover/movie?api_key=${apikey}&with_genres=10749`,
    documentary:`/discover/movie?api_key=${apikey}&with_genres=99`,
    }
export default request