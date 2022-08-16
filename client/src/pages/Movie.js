import React, {useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useQuery, useMutation} from '@apollo/client'
import {GET_MOVIE, GET_MOVIES} from '../query/movie'
import {DELETE_MOVIE} from '../mutations/movie'
import MovieModal from '../components/MovieModal'
import Spinner from '../components/Spinner'
import{FaTrash, FaPlay} from 'react-icons/fa'
import ReactPlayer from 'react-player'

const Movie = (project) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [isMovie, setIsMovie] = useState(false)
  const {data, loading, error} = useQuery(
        GET_MOVIE, {variables: {id}})
  const [deleteProject] = useMutation(
        DELETE_MOVIE, { variables: {id},
        onCompleted: ()  => navigate('/'),
        refetchQueries: [{query: GET_MOVIES}]
        })

        if(loading){return <Spinner/>}
        if(error){return <div>Something went wrong</div>}
let director = {...data.movie.director}
//mx-auto
  return(
  <div >{!loading && !error && (
    <div className='row ' style={{height: '90vh', background: 'black'}}>
      <div className='col  d-flex my-5 justify-content-left align-items-top ' >
      <div className='w-100 '
      style={{height: '370px'}}>
       {!isMovie ?  <div className='container d-flex justify-content-center align-items-center '
        style={{background: 'black', height: '370px', }}>
         <div className='btn btn-secondary' onClick={()=>setIsMovie(true)}
       ><FaPlay /></div>
        </div> :
       <ReactPlayer
             url={data.movie.refer}
             playing={false}
             controls='false'
       />}
       <div className='m-3 '
       style={{color: '#fee'}}>
       <h3>Description</h3>
       <p> It is a really cool movie at all. Just push the button up.,
  Watch and enjoy !.. Watch my else projects in footer. Their are really cool
  Buy what you want on shop project. And write what you want to who you want
  on social net</p>
       </div>
      </div>
      </div>
           <div className='col mt-4' style={{color: '#fee'}}>
           <h1>{data.movie.name}</h1>
           <h5 className='mt-4'>Genre</h5>
           <p className='lead'>{data.movie.genre}</p>
           <h5 className='mt-3'>Director</h5>
           <p className='lead'>{director.name}</p>
           <h5 className='mt-3'>Description</h5>
           <p className='lead'>{director.id}</p>
        <div className='d-flex align-items-center'>
     <Link to='/' className='btn btn-light  w-25 d-inline ms-auto'
          >To movies list</Link>
     <MovieModal movieId={data.movie.id}className='w-25'/>
     <Link to={`/director/${director.id}`} className='btn btn-light  w-25 d-inline ms-auto'
          >To director</Link>
     <button className='btn btn-danger  d-inline ms-auto w-25 ms-auto'
            onClick={deleteProject}><FaTrash/>Delete Movie</button>
      </div>
    </div>
  </div>
    )
      }
</div>
  )
}
export default Movie;
