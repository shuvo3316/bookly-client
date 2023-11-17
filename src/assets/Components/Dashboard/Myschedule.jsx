import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import BookingsCart from "./BookingsCart";
import PendingCart from "./PendingCart";

const Myschedule = () => {
    const {user}=useContext(AuthContext);
    const [carts,setCarts]=useState([])
    const [pending,setPending]=useState([])
    const [serviceProvideremail,setServiceProvideremail]=useState([])
    const axiosSecure=UseAxiosSecure();
    const uid=user.uid;
    const email=user.email;
    const array=[];

    useEffect(()=>{
        axiosSecure.get(`/bookings/${uid}`)
        .then(res=>{
            console.log(res.data)
            setCarts(res.data)

        })
   


    },[axiosSecure,uid])
    


    const HandleOreder=(serviceProvideremail)=>{
        //setCar(_id)
       //console.log('service email',serviceProvideremail) 
       
       

    useEffect(()=>{
        axiosSecure.get(`/bookings?email=${user.email}`)
        .then(res=>{
            console.log("oreder asche ",res.data)
            setPending(res.data)
        })

    },[axiosSecure,serviceProvideremail])
    }
    console.log('pending works',pending)
    document.title="mY-schedule"

   

    return (
        <div>
          <section>
          <h2 className="text-3xl text-center">Bookings</h2>
            {
                carts.map(cart => <BookingsCart
                    HandleOreder={HandleOreder}
                    key={cart._id}
                   
                    cart={cart}></BookingsCart>)
            }
          </section>

          <section>
          <h2 className="text-3xl text-center">My pending Works </h2>
            {
                pending.map(pend=><PendingCart key={pend._is}
                    pend={pend}
                ></PendingCart>)
            }
          </section>
        </div>
    );
};

export default Myschedule;