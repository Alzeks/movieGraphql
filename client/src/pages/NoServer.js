import {FaExclamationTriangle} from 'react-icons/fa'
//import {Link} from 'react-router-dom'

const NoServer = () => {
  return(
<div className='d-flex flex-column justify-content-center align-items-center mt-5 bg-secondary '
style={{height: '500px'}}>
   <FaExclamationTriangle className='text-danger' size='5em'/>
   <h1>503</h1>
   <p ClassName='lead'> Sorry, but its need connection to server or net </p>
   <a href='/' className='btn btn-primary'>Try again </a>
</div>
  )
}
export default NoServer;
