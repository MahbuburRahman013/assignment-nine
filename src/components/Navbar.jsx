import '../navbar.css'
import { useContext } from 'react';
import {toast,Toaster} from 'react-hot-toast';
import {NavLink,Link} from 'react-router-dom'
import { ContextProvider } from './AuthProvider';

const Navbar = () => {
      const {user,logOutUser} = useContext(ContextProvider);
      console.log(user)
   
    const navbar = <>
            <div id='navbar' className='flex gap-x-14'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/blogs'>All Blogs</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
            </div>
    </>

  const handleLogOut = () =>{
    logOutUser()
    .then(()=>{
      toast.success('Sing out successfully!!')
    })
    .catch(error=>{
      toast.success(error)
    })
  }
   
  

    return (
        <div className=' border-b-4 border-[#fa8241]'>
    <div className="navbar bg-base-100 container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navbar}
      </ul>
    </div>
    <a className="text-4xl uppercase font-bold text-[#546346]">Dreams</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="text-base font-semibold menu-horizontal px-1">
      {navbar}
    </ul>
  </div>
  <div className="navbar-end">
        

   {
    user ?
       <div className='flex gap-3 items-center'>
    <h1>{user.displayName}</h1>
    <img className='w-12 rounded-full' src={user?.photoURL? user.photoURL : 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' } alt="" />

       </div>:''
   }

    <button className='bg-[#fd8e05] text-gray-100 ml-2 py-2 px-5 rounded font-semibold'>
      {
          user? <Link onClick={handleLogOut}>Log out</Link>:<Link to='/login'>Login</Link>
      }
    </button>
  </div>
</div>
<Toaster></Toaster>
        </div>
    );
};

export default Navbar;