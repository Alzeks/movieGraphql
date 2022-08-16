import React, {useState, useEffect} from 'react';
import {useQuery, useMutation} from '@apollo/client'
import { GET_DIRECTOR, GET_DIRECTORS} from './query/director'
import {DELETE_DIRECTOR} from './mutations/director'
import './App.css';

function OneUser({oneId}) {
   const {data, loading, refetch, error} = useQuery(
        GET_DIRECTOR, {variables: {id: oneId }
        })
  const [directorDelete] = useMutation(DELETE_DIRECTOR, {
    variables: {id: oneId},
    refetchQueries: [{GET_DIRECTORS}]
  })
  const [user, setUser] = useState({})
//console.log(data);
  useEffect(() => {
   if(!loading){setUser(data.director)}
   }, [data])

const getAll = (e) => {
    e.preventDefault()
    refetch()
}
if(loading){return <div>Loading...</div>}
  return (
    <div className="App">
    appUserWichSetOneUserFromApp
    <div>
{ user.age }{user.name }
<button onClick={directorDelete}>Delete</button>
    </div>
    </div>
  );
}
export default OneUser;
