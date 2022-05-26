const API_KEY = process.env.API_KEY;
console.log(API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },

    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&withlanguage=en-US`,
    },

    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },

    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=27`
    },

    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10749`
    },

    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=9648`
    },

    fetchSciFi: {
        title: 'SciFi',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=878`
    },

    fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=37`
    },

    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=16`
    },

    fetchTV: {
        title: 'TV Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10770`
    },

}