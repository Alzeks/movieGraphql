import React from 'react'
import{FaVideo, FaSearch} from 'react-icons/fa'

const Header = () => {
return (
<nav className='navbar bg-dark mb-0 p-4'>
  <div className='container'><div>
    <a className='navbar-brand d-flex justify-content-center'href='/'>
    <FaVideo style={{color: 'red'}}/>
    <div >
    <div >Love Movie</div>
  </div>
   </a></div>
     <div className='d-flex align-items-center'>
     <input style={{height: '32px'}}></input>
     <div className='btn btn-light btn-sm'>
     <FaSearch style={{color: 'blue'}}/> </div>
     </div>
  </div>
</nav>
)
}
export default Header;
