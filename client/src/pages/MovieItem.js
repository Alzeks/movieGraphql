
//import{FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const MovieItem = ({movie, directorInfo}) => {
let director = {...directorInfo}

  return(
<div className='col-md-4 '>
 <div className='card mb-1'>
  <div className='card-body 'style={{background: '#ddd',color: ''}}>
<div className='d-flex justify-content-between align-items-center'>
    <h5 className='card-title'>{movie.name}</h5>
    <Link className='btn btn-light' to={`/Movie/${movie.id}`}>
    View</Link>
</div>
<p className='small'>Genre:<strong>{movie.genre}</strong></p>
<p className='small'>Director Name:<strong>{director.name}</strong></p>
  </div>
 </div>
</div>
  )
}
export default MovieItem;
