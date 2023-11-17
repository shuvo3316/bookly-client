import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import toast from "react-hot-toast";

const ServiceDetails = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const loadeddata=useLoaderData()
    const {_id,photo,name,area,price,description,serviceProviderimage,serviceProvidername,serviceProvideremail}=loadeddata;


    const handleAddbookings=e=>{
        e.preventDefault()
        console.log('purchase working')
        const form=e.target;
        const date =form.date.value;
        const special =form.special.value;
        

//         let area1 =form.area.value;
//         const area=area1.toLowerCase();
//         const price =form.price.value;
//         const photo =form.photo.value;
//         const description =form.description.value;
//         const serviceProvidername=user.displayName;
//         const serviceProviderimage=user.photoURL
// ;

       
//         console.log(name,area,price,description);

        const newBooking={ name:name,photo:photo,area:area,price:price,serviceProvideremail:serviceProvideremail,useremail:user.email,special:special,uid:user.uid,status:'pending' }
        console.log("newbooking",newBooking)

        // fetch('http://localhost:5000/bookings',{
        //     method:'post',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(newBooking)
        // })
        // .then(res=>res.json())
        axiosSecure.post('/bookings',newBooking)
        .then(data=>{
            console.log(data.data)
            if(data.data.insertedId ){
                toast.success('Successfully booked!')

            }
        })



    }

    return (
        <div>
            <h2 className="text-3xl text-center">Service Provider Information:</h2>


<div className="w-full max-w-sm bg-white md:mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <div className="flex flex-col items-center pb-10">
        <img className=" mb-3  shadow-lg" src={serviceProviderimage} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{serviceProvidername}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
       
    </div>
</div>


<h2 className="text-3xl text-center">Service  Information:</h2>


            
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">

    <a href="#">
        <img className="p-8 rounded-t-lg" src={photo} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p>
            {description}
        </p>
      
        <div className="flex items-center mt-2.5 mb-5">
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>




{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Service Name:{name}!</h3>
    <img src={photo} alt="" />
    {/* service provider email */}
    <h3 className="font-bold text-lg">User email:{user.email}</h3>
    <div className="closemodal-toggle	"method="dialog">
      <form onSubmit={handleAddbookings} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <div className="form-control  w-fit">
<label className="label">
<span className="label-text">Service Date </span>
</label>
<label className="input-group">
<span>Date </span>
<input type="date" name="date" placeholder="Date " className="input input-bordered w-full" required />
</label>
</div>
        <div className="form-control  w-fit">
<label className="label">
<span className="label-text">special instruction </span>
</label>
<label className="input-group">
<span>Date </span>
<input type="text" name="special" placeholder="special instruction  " className="input input-bordered w-full" />
</label>
</div>
        <p>price : ${price}</p>
        <button  className="btn">Purchase</button>
      </form>
     <Link to={"/allservice"}> <button onClick={()=>document.getElementById('my_modal_5').closeModal()} className="btn">Close</button></Link>

    </div>
  </div>
</dialog>


        </div>
    </div>
</div>

        </div>
    );
};

export default ServiceDetails;