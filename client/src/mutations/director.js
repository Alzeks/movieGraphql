import {gql} from '@apollo/client'


export const ADD_DIRECTOR = gql`
mutation addDirector($name: String!, $age: Int) {
  addDirector(name: $name, age: $age){
       name
  }
}
`
export const DELETE_DIRECTOR = gql`
mutation deleteDirector($id: ID!) {
  deleteDirector(id: $id){
      id, name, age
  }
}
`
export const UPDATE_DIRECTOR = gql`
mutation updateDirector($id: ID! $name: String! $age: String ) {
  updateDirector(id: $id name: $name age: $age){
      id, name, age
  }
}
`
