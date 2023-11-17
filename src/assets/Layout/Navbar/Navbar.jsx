import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const HandleSignout= ()=>{
        logOut()
        .then(result=>{
            console.log('user signout',result.user)
        })
        .catch(error=>{
            console.log(error.meassage)
        })
    }
  
    const dlinks =<>
     <li><Link to={'/my-service'}><a>My-services</a></Link></li>
     <li><Link to={'/add-service'}><a>Add-services</a></Link></li>
    <li> <Link to={'/my-schedule'}><a>My-Schedule</a></Link></li>
     </>
          
    return (
        <div className="flex mt-12">
                    <img src={'https://i.ibb.co/hysW8Xt/Untitled.png'} className="w-32 rounded-xl" alt="" />


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-2 w-52">
      <li><Link to={'/'}><a>Home</a></Link></li>
        <li>
        <Link to={'/dashboard'}><a>Dashboard</a></Link>
          <ul className="p-2">
          {
            dlinks
          }
          </ul>
        </li>
        <li><Link to={'/services'}><a>Services</a></Link></li>


          {
              user?  <li><Link to={'/addservice'}><a>add services</a></Link></li>:0

          }
          {
              user?  <li><Link to={'/manageservice'}><a>manage services</a></Link></li>:0

          }
      </ul>
    </div>
    <div className="flex">
        <a className="btn btn-ghost normal-case text-xl">BookLy</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'}><a>Home</a></Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2">
            {dlinks}
          </ul>
        </details>
      </li>
          <li><Link to={'/services'}><a>Services</a></Link></li>

          {
              user?  <li><Link to={'/addservice'}><a>add services</a></Link></li>:''

          }    

          {
              user?  <li><Link to={`/manageservice/${user.uid}`}><a>manage services</a></Link></li>:''

          }    
          
          </ul>
  </div>
  <div className="navbar-end">

{
    user?  <>     <p>{user.email}</p>
    <img src={user.photoURL} className="w-12 h-12 rounded-full mr-2" alt="" /> <button onClick={()=>HandleSignout()}> <a className="btn">Sign Out</a></button> </>:   <Link to={'/login'}> <a className="btn">Login</a></Link>


}

  </div>
</div>
            
        </div>
    );
};

export default Navbar;