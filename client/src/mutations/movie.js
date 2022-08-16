import {gql} from '@apollo/client'


export const ADD_MOVIE = gql`
mutation addMovie(
  $name: String!, $genre: String
  $directorId: ID! $refer: String) {
  addMovie(name: $name, genre: $genre,
    directorId: $directorId, refer: $refer){
       name
  }
}
`
export const DELETE_MOVIE = gql`
mutation deleteMovie($id: ID!) {
  deleteMovie(id: $id){
      id, name, genre
  }
}
`
export const UPDATE_MOVIE = gql`
mutation updateMovie(
$id: ID! $name: String! $genre: String $directorId: ID!)
 {updateMovie(id: $id name: $name genre: $genre directorId: $directorId){
      id, name, genre, director{name}
  }
}
`
