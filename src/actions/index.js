// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

//action creaters
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies: movies
      }
}
export function addFavourite(movie){
    return {
        type: ADD_TO_FAVOURITE,
        movie: movie
      }
}

export function removeFromFavourites(movie){
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie: movie
      }
}

// export function removeFromFavourites(movie){
//     return {
//         type: REMOVE_FROM_FAVOURITE,
//         movie: movie
//       }
// }

export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITES,
        val
      }
}