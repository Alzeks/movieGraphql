//it doesn't include in project
import React from 'react'
import { useQuery} from '@apollo/client'
import DirectorRow from './DirectorRow'
import Spinner from '../components/Spinner'
import {GET_DIRECTORS} from '../query/director'
import {FaExclamationTriangle} from 'react-icons/fa'

const Directors = () => {
const {data, loading, error} = useQuery(
      GET_DIRECTORS)//, {pollInterval: 500})
      if(loading){return <Spinner />}
  if(error){
return (
<div className='d-flex flex-column justify-content-center align-items-center mt-5 bg-secondary'>
     <FaExclamationTriangle className='text-danger' size='5em'/>
      <h1>503</h1>
      <p ClassName='lead'> Sorry, but its need connection
      to server or net lack </p>
      <a href='/' className='btn btn-primary'>Go Back</a>
</div>)}

  return(<>{!loading && !error && (
<table className='table table-hover mt-2 mb-0'>
  <thead>
    <tr>
     <th>Name</th>
     <th>Age</th>
     <th>Description</th>
    </tr>
</thead>
    <tbody>
  {data.directors.map(el =>
    <DirectorRow key={el.id} client={el}/>)}
    </tbody>
</table>
  )}</>
  )
}
export default Directors;
