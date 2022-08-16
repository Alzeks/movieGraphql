import React, {useState} from 'react'
import { useQuery} from '@apollo/client'
import MovieItem from './MovieItem'
import Spinner from '../components/Spinner'
import DirectorModal from '../components/DirectorModal'
import MovieModal from '../components/MovieModal'
import {GET_MOVIES} from '../query/movie'
import {GET_DIRECTORS} from '../query/director'
import {useNavigate} from 'react-router-dom'
import{FaRegFrown, FaSearch, FaPlay} from 'react-icons/fa'
import NoServer from './NoServer'

const MainPage = () => {
const  genreList =[{id: 1, genre: 'Sky-fi'},
{id: 2, genre: 'Crime'},{id: 3, genre: 'Horror'},
{id: 4, genre: 'Comedy'},{id: 5, genre: ' Adventure'},
{id: 6, genre: 'Triller'},{id: 7, genre: 'Drama'},
{id: 8, genre: 'Historical'},{id: 9, genre: 'Detective'},
{id: 10, genre: 'Action'},{id: 12, genre: 'No genre'}
]
const navigate = useNavigate()
const  [genreData, setGenreData] = useState()
const  [inpoot, setInpoot] = useState('')
const  [movieByName, setMovieByName] = useState()

const {data, loading, error} = useQuery(
      GET_MOVIES, {
        variables: {genre: genreData, name: movieByName}
      })//, {pollInterval: 500})

const {data: directorData} = useQuery(GET_DIRECTORS)

const toDirector = (id) => {navigate(`/Director/${id}`)}

      if(loading){return <div>Loading... </div>}
      if(error){return <NoServer />}
  return(<div className='h-50'style={{height: '300px'}}>
<div className='mb-3 d-flex justify-content-between '>
 <div className='container  d-flex '
 style={{}}>
     <label className='form-label'></label>
  <select className='form-select 'id='genreData'
      value={genreData} onChange={ (e) =>
      {setMovieByName();setGenreData(e.target.value)}
      }>
    <option value={genreData}>Choos Genre</option>
      {genreList.map((el) =>
      <option  style={{color: 'blue'}}
      key={el.id} value={el.genre}>{el.genre}</option>
      )}
  </select>

   <button className='btn btn-dark btn-sm '
    onClick={()=>{setGenreData(); setInpoot('')
      setMovieByName()}}>Skip All Filters</button>

    <label className='form-label'></label>
  <select className='form-select '
       onChange={ (e) =>{toDirector(e.target.value)}}
      >
    <option >Choos Director</option>
      {directorData.directors.map((el) =>
      <option key={el.id} value={el.id}>{el.name}</option>
      )}
  </select>

  <div className='d-flex  align-items-center'>
      <DirectorModal />
      <MovieModal />
      <div className='btn btn-danger'>Empty button</div>
      </div>
 </div>
 <div>
  <div className='d-flex  align-items-center mr-5'>
    <input type='text' style={{height: '33px'}}
     value={inpoot}  placeholder='Search movie'
      onChange={(e) => setInpoot(e.target.value)}
    />
    <div className='btn btn-light btn-sm'
    onClick={() => {setGenreData();setMovieByName(inpoot)
    setInpoot('')}}>
    <FaSearch  style={{color: 'blue'}}/>
    </div>
  </div>
</div>
</div>

<div>  {data.movies.length > 0 ? (
   <div className='row mt-1'>
     {data.movies.map((el) => (<MovieItem key={el.id}
     movie={el} directorInfo={el.director}/>))}
   </div>
) :
    (<h3 className='mt-4'
    style={{color: 'white', height: '100px'}}>No movie<FaRegFrown/></h3>)}
 </div>
 <div className='d-flex align-items-center '
    style={{ height: '200px'}}>
    <FaPlay size='5em' className='btn' style={{color: 'blue',}}
    onClick={()=> navigate(`/Movie/${data.movies[0].id}`)}/>
  </div>
    <div style={{height: '50px'}}>  </div>
</div>
  )
}
export default MainPage;
