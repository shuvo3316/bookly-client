import { useContext, useState } from "react";

import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const auth = getAuth();

    const navigate=useNavigate()
    const [errore,seterror]=useState('')


    const handleRegister=e=>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const email =form.email.value;
        const photo =form.photo.value;
        const password =form.password.value;
      //  console.log(name,email,password,photo)



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



        createUser(email,password)
        .then(result=>{
            console.log(result.user.email)
               //navigate after login
               navigate(location?.state?location.state:'/')
               const notify = () => toast("Succesfully Registered !", {
             position: 'top-right',
             autoClose: 3000, // Close after 3 seconds
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
           });
        if(result.user){
         notify()


        updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
        .then(()=>console.log("updated profile"))
        .catch()

        navigate("/")
        }
           //
           
           //const user={uid:uid,email:email}




        // fetch('http://localhost:5000/users',{
        //     method:"post",
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(user)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })

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

    return (
        <div className="hero min-h-screen " style={{backgroundImage: "url('https://i.ibb.co/ZB6SjZq/bmw7.jpg')"}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
      <div >
      <h2 className="text-3xl text-orange-400">4 easy Steps to connect with us</h2>
        <ul className="steps steps-vertical">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose Car</li>
  <li className="step">Purchase</li>
  <li className="step">Receive Product</li>
</ul>
      </div>
          <div data-aos="fade-left"  className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-yellow-400">Register now!</h1>
            <p className="py-6 text-yellow-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-2xl  border">
            <form  onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-400">Name</span>
                </label>
                <input type="input" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-400">Photo Url</span>
                </label>
                <input type="input" name="photo" placeholder="Photo Url" className="input input-bordered" required />
              </div>
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
                 <p>Already have an account? please  <span className="text-orange-600"><Link to={'/login'}>login</Link></span></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;