import {FaExclamationTriangle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return(
<div className='d-flex flex-column bg-secondary justify-content-center align-items-center '
style={{height: '700px'}}>
   <FaExclamationTriangle className='text-danger' size='5em'/>
   <h1>404</h1>
   <p ClassName='lead'> Sorry, this page does not exist</p>
   <Link to='/'className='btn btn-primary'>Go Back</Link>
</div>
  )
}
export default NotFound;
