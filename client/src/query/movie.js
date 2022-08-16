import {gql} from '@apollo/client'


export const GET_MOVIES = gql`
query  movies($genre: String
  $name: String
  $directorId: ID){
movies(genre: $genre name: $name directorId: $directorId){
  id, name, genre, refer, director{id, name, age}
}
}
`
export const GET_MOVIE = gql`
query movie($id: ID) {
   movie(id: $id){
    id, name, genre, director{id, name, age}, refer
  }
}
`
