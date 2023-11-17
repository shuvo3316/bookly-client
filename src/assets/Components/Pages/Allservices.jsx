import { useEffect, useState } from "react";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import ServiceCard from "../ServiceCard/ServiceCard";

const Allservices = () => {
    const[allservice,setAllservice]=useState([]);
    const axiosSecure =UseAxiosSecure();
    const[click,setClick]=useState(0)
    document.title="Bookly | All Service"

    useEffect(()=>{
        axiosSecure.get('/allservices')
        .then(res=>{
            console.log(res.data)
            setAllservice(res.data)
        })
        .catch(error=>{
            console.log(error.message)
        })
      },[])
      const handleShoWmore=(x)=>{
        setClick(x)
      }
    return (
        <div>
            <h2 className="text-center text-3xl">All service</h2>

          {
            click==0? <><div className="grid grid-cols-1 md:grid-cols-2 gap-5  justify-items-center	  ">
            {
                allservice.slice(0,4).map(service => <ServiceCard key={service._id} service={service} ></ServiceCard> )
            }
   
        </div>  
        <div>
            <button className="btn btn-primary" onClick={()=>handleShoWmore(1)}>Show More..</button>

            </div>
          </> :<>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5  justify-items-center	  ">
          {
              allservice.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard> )
          }
          
      </div>
      <div>
            <button className="btn btn-primary" onClick={()=>handleShoWmore(0)}>Show less..</button>

            </div>
      </>
          }
        </div>
    );
};

export default Allservices;