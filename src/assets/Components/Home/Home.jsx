import { useEffect, useState } from "react";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import { Link } from "react-router-dom";
import ServiceCard2 from "../ServiceCard/ServiceCard2";
import Carosol from "./Carosol";

const Home = () => {
    const [services,setServices]=useState([])
    const axiosSecure=UseAxiosSecure()
  useEffect(()=>{
    axiosSecure.get('/popularservices')
    .then(res=>{
        console.log(res.data)
        setServices(res.data)
    })
    .catch(error=>{
        console.log(error.message)
    })
  },[])
  document.title = 'Bookly||Home';

    return (
        <div>
            {/* popular section  */}
            <section className="items-center">
                <h2 className="text-3xl text-red-400 text-center">Popular Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  justify-items-center	  ">
                    {
                        services.map(service => <ServiceCard2 key={service._id} service={service} ></ServiceCard2> )
                    }
                </div>
                    <div className="justify-items-center ">
                    <Link to={"/allservice"}> <button className="btn btn-primary text-center ">All Service</button></Link>
                    </div>
            </section>
<div className="mx-auto ">

<Carosol></Carosol>
 
</div>

<section>

                  <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="hero my-20 ">
  <div  className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/PrnJTpr/alchemist586.jpg" className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img src="https://i.ibb.co/Jpg9g1j/alchemist.jpg" className="relative lg:-ml-40  max-w-xs rounded-lg shadow-2xl" />

        </div>
    <div  data-aos="zoom-out-down">
      <h1 className="text-5xl font-bold"> <span className="text-red-400">30% OFF</span> Chrismas Events</h1>
      <p className="py-6">price start from $52.00</p>
      <button className="btn btn-error">Book Now</button>
    </div>
  </div>
</div>

</section>


        </div>
    );
};

export default Home;