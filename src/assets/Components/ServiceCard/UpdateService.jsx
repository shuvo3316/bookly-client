import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";

const UpdateService = () => {
    const{user}=useContext(AuthContext)
    const loadeddata=useLoaderData()
    const axiosSecure=UseAxiosSecure()
    const {_id,name,area,price,photo,description}=loadeddata;

    const handleAdd=e=>{
        e.preventDefault()
        const form=e.target;
        const name =form.name.value;
        let area1 =form.area.value;
        const area=area1.toLowerCase();
        const price =form.price.value;
        const photo =form.photo.value;
        const description =form.description.value;
        const serviceProvidername=user.displayName;
        const serviceProviderimage=user.photoURL
;

       
        console.log(name,area,price,description,photo);

        const updatedservice={ name:name,photo:photo,area:area,price:price,description:description,serviceProvidername:serviceProvidername,serviceProviderimage:serviceProviderimage,serviceProvideremail:user.email,uid:user.uid }

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

        axiosSecure.patch(`/allservices/service/${_id}`,updatedservice)
        .then(data=>{
           if(data.data.insertedId){
            Swal.fire({
                title: 'successfully updated',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
           }
        })


    }
    return (
        <div className="p-10">
        <h2 className="text-3xl font-bold text-center">Update Service</h2>

     <form onSubmit={handleAdd} >

     <div className="md:flex gap-4 md:p-10">
        <div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Service name</span>
</label>
<label className="input-group">
<span>Name</span>
<input type="text" name="name" placeholder="Service name" defaultValue={name} className="input input-bordered w-full" />
</label>
</div>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Service Area</span>
</label>
<label className="input-group">
<span> Area </span>
<input type="text" name="area" placeholder="Service Area" defaultValue={area} className="input input-bordered w-full" />
</label>
</div>
        </div>
      
        <div className="md:flex gap-4 md:p-10">
        <div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Service description</span>
</label>
<label className="input-group">
<span>description</span>
<input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Service Price </span>
</label>
<label className="input-group">
<span>Price </span>
<input type="text" name="price" defaultValue={price} placeholder="Price " className="input input-bordered w-full" />
</label>
</div>

        </div>
        <div className="md:flex gap-4 md:p-10">
        <div className="form-control  w-full">
<label className="label">
<span className="label-text">Service Photo Url</span>
</label>
<label className="input-group">
<span>Photo</span>
<input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" />
</label>
</div>


        </div>
        <button className="btn w-full mt-4 ">Add Service</button>
     </form>

        
    </div>
    );
};

export default UpdateService;