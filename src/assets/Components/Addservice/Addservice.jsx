import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Addservice = () => {
    const{user}=useContext(AuthContext)
    document.title = 'Bookly||Add Service';

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
        const serviceProvideremail=user.email
;

       
        console.log(name,area,price,description);

        const newProduct={ name:name,photo:photo,area:area,price:price,description:description,serviceProvidername:serviceProvidername,serviceProviderimage:serviceProviderimage,serviceProvideremail:serviceProvideremail,uid:user.uid }
        console.log(newProduct)

        fetch('http://localhost:5000/allservices',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Successfully deleted!')

            console.log(data)
        })



    }
    return (
        <div className="p-10">
        <h2 className="text-3xl font-bold text-center">Add Service</h2>

     <form onSubmit={handleAdd} >

     <div className="md:flex gap-4 md:p-10">
        <div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Service name</span>
</label>
<label className="input-group">
<span>Name</span>
<input type="text" name="name" placeholder="Service name" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Service Area</span>
</label>
<label className="input-group">
<span> Area </span>
<input type="text" name="area" placeholder="Service Area" className="input input-bordered w-full" />
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
<input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Service Price </span>
</label>
<label className="input-group">
<span>Price </span>
<input type="text" name="price" placeholder="Price " className="input input-bordered w-full" />
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
<input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
</label>
</div>


        </div>
        <button className="btn w-full mt-4 ">Add Service</button>
     </form>

        
    </div>
    );
};

export default Addservice;