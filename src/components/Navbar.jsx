import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {

   
    const navbar = <>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>Services</NavLink></li>
            <li><NavLink>Blogs</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
    </>

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
    <ul className="text-xl font-semibold gap-10 menu-horizontal px-1">
      {navbar}
    </ul>
  </div>
  <div className="navbar-end">
    <button>
      <Link to='/login'>Login</Link>
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;