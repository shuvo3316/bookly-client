import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const navigate=useNavigate()
    const {logIn,googleSignIn}=useContext(AuthContext)
    const [errore,seterror]=useState('')

    const location=useLocation()
    const handleLogIn=e=>{
        e.preventDefault();
        console.log(e.target.checked)
        const form = e.target;
        //const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password)
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if(password.length<6){
          toast("Passwor should be at least 6 Character long")
          return;
      }
      else if(!/[A-Z]/.test(password)){
          toast("An Upper case a  should be set in password");
          return;
      }
      else if(!/[0-9]/.test(password)){
          toast("A number  should be set in password")
          return;
      }
      else if(!regex.test(password)){
          toast("A special character  should be set in password")
          return;
      }

        logIn(email,password)
        .then(result=>{
            console.log(result.user)

              //navigate after login
              navigate(location?.state?location.state:'/')
              const notify = () => toast("Succesfully Logged In!", {
            position: 'top-right',
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
       if(result.user){
        notify()
       }

        })
        .catch(error=>{
            console.log(error.message)
            const errore=error.message;
            seterror(errore)
            const notify1 = () => toast("Error Logged In!", {
                position: 'top-right',
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
           if(errore){
            notify1()
           }
        })

    }

    const HandleGooglesignIn=(e)=>{
        e.preventDefault()
        googleSignIn()
        .then(result=>{
            
            navigate(location?.state?location.state:"/")
           
            const notify = () => toast("Succesfully Logged In!", {
                position: 'top-right',
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
           if(result.user){
            notify()
           }

            

        })
        .catch(error=>{
            console.log(error.message)
        })

      }
    return (
        <div  className="hero min-h-screen " style={{backgroundImage: "url('https://i.ibb.co/rwtrYBG/loginback.jpg')"}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-left"  className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-yellow-400">Register now!</h1>
            <p className="py-6 text-yellow-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div data-aos="fade-right"  className="card flex-shrink-0 w-full max-w-sm shadow-2xl  border">
            <form onSubmit={handleLogIn} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-400">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-400">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-orange-400">Forgot password?</a>
                </label>
                <label className="label">
                 <p>do not have an account? please  <span className="text-orange-600"><Link to={'/register'}>register</Link></span></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">Login</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={HandleGooglesignIn} className="btn btn-error">Login with google</button>
              </div>

              
            


            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;