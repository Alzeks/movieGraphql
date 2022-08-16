import {useState} from 'react'
import {ADD_MOVIE, UPDATE_MOVIE} from '../mutations/movie'
import {GET_MOVIES} from '../query/movie'
import {GET_DIRECTORS} from '../query/director'
import {useQuery, useMutation} from '@apollo/client'


const MovieModal = ({movieId}) => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [refer, setRefer] = useState('')
  //const [status, setStatus] = useState('new')
  const [directorId, setDirectorId] = useState('')
  const  genreList =[{id: 1, genre: 'Sky-fi'},
  {id: 2, genre: 'Crime'},{id: 3, genre: 'Horror'},
  {id: 4, genre: 'Comedy'},{id: 5, genre: ' Adventure'},
  {id: 6, genre: 'Triller'},{id: 7, genre: 'Drama'},
  {id: 8, genre: 'Historical'},{id: 9, genre: 'Detective'},
  {id: 10, genre: 'Action'},{id: 12, genre: 'No genre'}
]
  const{data, loading, error, } = useQuery(GET_DIRECTORS)
  const [addMovie] = useMutation(
    ADD_MOVIE, {variables: {name: name, genre: genre,
       directorId: directorId, refer: refer},
    refetchQueries: [{query: GET_MOVIES}]
})
console.log(movieId);
const [updateMovie] = useMutation(
  UPDATE_MOVIE, {variables: {id: movieId, name: name,
    genre: genre, directorId: directorId, refer: refer},
  refetchQueries: [{query: GET_MOVIES}]
})
const onSubmit = (e) => {
  e.preventDefault();
  if(name.length < 3 || genre.length < 3 ||
    refer.length === 0 || directorId.length === 0){
      alert('Please, fill all fields marked by "!"')}
  else{if(movieId){updateMovie()}
    addMovie()}
}

if(loading){return <div>Loading...</div>}
if(error){return <div>Something wrong</div>}
  return (
<div>
<button type="button" className="btn btn-secondary"
    data-bs-toggle="modal" data-bs-target="#AddProjectModal">
    {movieId ? 'Update Movie' : 'Add Movie'}
</button>

<div className="modal fade" id="AddProjectModal"
    aria-labelledby="AddProjectModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-secondary">
      <div className="modal-header">
        <h5 className="modal-title" id="AddProjectModal">Add movie title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
<div className="modal-body">

<form onSubmit={onSubmit}>
 <div className='mb-2 d-flex'>
   <label className='form-label'>
   <div>Name</div><h4 style={{color: 'red'}}>!</h4>
   </label>
    <input type='text' className='form-control'
    id='name' placeholder='Director name'
    value={name} onChange={(e) => setName(e.target.value)}/>
 </div>
 <div className='mb-2 d-flex'>
   <label className='form-label'>
   <div>Refery</div><h4 style={{color: 'red'}}>!</h4>
   </label>
    <input type='text' className='form-control'
    id='refer' placeholder='Refery to movie(http//..)'
    value={refer} onChange={(e) => setRefer(e.target.value)}/>
 </div>
<div className='mb-3'>
 <label className='form-label' id='genre'>Description</label>
  <textarea type='text' className='form-control'
  value={genre} onChange={(e) => setGenre(e.target.value)}>
  </textarea>
</div>

<div className='mb-2  ' >
   <label className='form-label'>
   <h4 style={{color: 'red'}}>!</h4>
   </label>
  <select className='form-select bg-info' id='directorId'
       value={directorId} onChange={(e) =>
       setDirectorId(e.target.value)}>
       <option value=''>Select director</option>
       {data.directors.map((el) =>
       <option  key={el.id} value={el.id}>{el.name}</option>)}
  </select>
  <label className='form-label'><h4>-!Director Genre!-</h4></label>
 <select className='form-select bg-warning' id='genre'
      value={genre} onChange={(e) => setGenre(e.target.value)}>
      <option value=''>Select genre</option>
      {genreList.map((el) =>
     <option  key={el.id} value={el.genre}>{el.genre}</option>
 )}
 </select>
</div>
  <button type="submit" className="btn btn-primary"
         data-bs-dismiss='modal'
         onClick={(e)=> onSubmit(e)}>Submit</button>
</form>
</div>
      <div className="modal-footer">
         <button type="button" className="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
</div>
)
}
export default MovieModal;
