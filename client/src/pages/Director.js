import React from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useQuery, useMutation} from '@apollo/client'
import {GET_DIRECTOR, GET_DIRECTORS} from '../query/director'
import {DELETE_DIRECTOR} from '../mutations/director'
import {GET_MOVIES} from '../query/movie'
import Spinner from '../components/Spinner'
import{FaList, FaPlay} from 'react-icons/fa'
import MovieItem from './MovieItem'

const Director = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data, loading, error} = useQuery(
        GET_DIRECTOR, {variables: {id}})
const [deleteDirector] = useMutation(DELETE_DIRECTOR, {
    variables: {id: id},
    onCompleted: ()  => navigate('/'),
    refetchQueries: [{query: GET_DIRECTORS}]
    })
        const {data: movieData} = useQuery(
           GET_MOVIES, {
             variables: {directorId: id}
           })
        if(loading){return <Spinner/>}
        if(error){return <div>Something went wrong</div>}

  return(
<div >{!loading && !error && (
  <div className='mx-auto  card p-5 '
  style={{background: 'black'}}>
   <div className='d-flex justify-content-between align-items-center'
   style={{color: 'white'}}>
        <h1>{data.director.name}</h1>
        <FaList />
<Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'
      >To movies list</Link>
      </div >
    <div style={{color: 'white'}}>
      <p>{data.director.id}</p>
      <h5 className='mt-3'>Age</h5>
      <p className='lead'>{data.director.age}</p>
      <h5 className='mt-3'>Director</h5>
      <p className='lead'>{data.director.name}</p>
     </div >
{movieData ?
<div className='row mt-1'>
  {movieData.movies.map((el) =>(<MovieItem key={el.id}
  movie={el} directorInfo={el.director}/>))}
</div> : 'No movies'}

<div className='d-flex align-items-center m-4'>
    <FaPlay size='5em' className='btn'
    style={{color: 'blue',}}
    onClick={()=>navigate(`/Movie/${movieData.movies[0].id}`)}/>'>>'</div>
    <div className='btn btn-danger btn-sm w-25 d-inline ms-auto '
    onClick={()=>deleteDirector()}>Delete Director</div>
</div>

    )
      }

</div>
  )
}
export default Director;
