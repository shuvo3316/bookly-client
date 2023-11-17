import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Cart from "./Cart";
import toast, { Toaster } from 'react-hot-toast';


const ManageServices = () => {
    const {user}=useContext(AuthContext);
    const [carts,setCarts]=useState([])
    const axiosSecure=UseAxiosSecure();

    const uid=user.uid;

    useEffect(()=>{
        axiosSecure.get(`/manageservice/${uid}`)
        .then(res=>{
            console.log(res.data)
            setCarts(res.data)
        })

    },[axiosSecure,uid])
    document.title = 'Bookly||Manage Service';


    const handleDelete =(_id)=>{

        axiosSecure.delete(`/manageservice/${_id}`)
        .then(res=>{
            console.log('successfully deleted',res.data)
         if(res.data.deletedCount>0){
            const remaining=carts.filter(myservice => myservice._id!==_id)

            toast.success('Successfully deleted!')

    
            setCarts(remaining)
         }
        })
            
      }
    return (
        <div>
            <h2 className="text-3xl text-center">Your Carts</h2>
            {
                carts.map(cart => <Cart key={cart._id}
                    handleDelete={handleDelete}
                    cart={cart}></Cart>)
            }


            
        </div>
    );
};

export default ManageServices;