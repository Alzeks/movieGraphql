import {gql} from '@apollo/client'

export const GET_DIRECTORS = gql`
query  {
directors{id,name,age}
}
`
export const GET_DIRECTOR = gql`
query director($id: ID) {
   director(id: $id){
    id, name, age
  }
}
`
