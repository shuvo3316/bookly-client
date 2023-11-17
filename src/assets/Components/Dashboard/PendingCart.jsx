
import { useState } from "react";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import toast, { Toaster } from 'react-hot-toast';


const PendingCart = ({pend}) => {
    const {serviceProvideremail,status,_id,name,area,price,photo,description}=pend;
    //console.log('the car is',cart)
    const axiosSecure=UseAxiosSecure()
    const [select,setSelect]=useState()


   // console.log(select)

    const handleAdd=(e)=>{
        e.preventDefault();
        if(select!==null){
            setSelect(e.target.value)
            console.log(e.target.value)
       
    
            const updatedservice={ status: e.target.value}
            console.log(updatedservice)
    
                //send data to server 
            // fetch(`https://brand-shop-server-hrrx65cll-shuvo3316.vercel.app/products/${_id}`,
            // {
            //     method:'put',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify(newProduct)
            // })
            // .then(res=>res.json())
    
            axiosSecure.patch(`/bookings/${_id}`,updatedservice)
            .then(data=>{
               if(data.data.insertedId){
                toast.success('Successfully updated!')

              console.log('dpdated')
               }
            })
    
        }

    
   }
   
 


    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-400 dark:text-gray-900">
        <ul className="flex flex-col divide-y divide-gray-700">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={photo} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leadi sm:pr-8">{name}</h3>
                                <p className="text-sm dark:text-gray-400">{area}</p>
                                <p className="text-sm dark:text-gray-400">{description}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">${price}</p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                           
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>

                                
                             {/* <button className="btn btn-primary"> Status : {status}</button> */}

                             <select value={select} onChange={handleAdd } className="select select-accent w-full max-w-xs">
  <option disabled selected>{status}</option>
  <option >pending</option>
  <option >approve</option>
  <option>completed</option>
</select>




                            </button>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
            
        </div>
    );
};


export default PendingCart;