import React from 'react'
import{FaVideo, FaUserFriends, FaCartArrowDown} from 'react-icons/fa'

const Footer = () => {
return (
<nav className='navbar bg-dark mb-0 p-4'>
  <div className='container d-flex w-50'>
    <div style={{color: 'white'}}>My Projects:</div>
    <div>
  <a className='d-flex'href='https://github.com/Alzeks/social1.git'>
    <div className='d-flex align-items-center'>
    <FaUserFriends style={{color: 'red'}}/></div>
    <div >Social</div>
   </a>
   </div>
     <div className='d-flex align-items-center'>
     <a className=' d-flex'href='https://github.com/Alzeks/store.git'>

       <div className='d-flex align-items-center'>
       <FaCartArrowDown style={{color: 'red'}}/>
       </div><div >Shop</div>
      </a>
     </div>
  </div>
</nav>
)
}
export default Footer;
