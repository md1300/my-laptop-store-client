import { useLoaderData } from "react-router-dom";



const UpdateCart = () => {
   const loadingProduct=useLoaderData()  

   const {name,model,price,description,_id}=loadingProduct;
   

   const handleUpdateButton=(e)=>{
       e.preventDefault()
       const form=e.target;
       const name=form.name.value;
       const model=form.model.value;
       const price=form.price.value;
       const description=form.description.value;
       const products={name,model,price,description};

       console.log(products)

       fetch(`http://localhost:3000/updates/${_id}`,{
        method:'PUT',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(products)    
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
   })
   }



    return (
        <>
         
            {/* ------------------------ */}
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Update product details</h1>     
    </div>
    <div className="card bg-base-100 w-full   shadow-2xl">
      <form  onSubmit={handleUpdateButton}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder={name} className="input input-bordered" name="name"    required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">model</span>
          </label>
          <input type="text" placeholder={model} className="input input-bordered" name="model"  required />         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" placeholder={price} className="input input-bordered" name="price"  required />         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input type="text" placeholder={description} className="input input-bordered" name="description" required />         
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">update Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
            {/* ------------------------ */}
        </>
    );
};

export default UpdateCart;