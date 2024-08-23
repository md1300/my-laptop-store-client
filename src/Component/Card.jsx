
import { Link } from "react-router-dom";


const Card = ({product}) => {
   
    const {name,_id,model,price,description}=product;

    const handleDeleteButton=_id=>{
        console.log(_id)
        fetch(`http://localhost:3000/products/${_id}`,{
            method:'DELETE',

        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }
    return (
        <>
            <div
                className="border border-orange-600"
                 >
                    <h1>id : {_id}</h1>
                    <h1>product name:{name}</h1>
                    <h1>model:{model}</h1>
                    <h1>price:{price}</h1>
                    <h1>description:{description}</h1>
                    <button  className="btn btn-ghost"  onClick={()=>handleDeleteButton(_id)}>X</button>
                    <Link to={`/updates/${_id}`}><button className="btn btn-block">Update product</button></Link>
                </div>
          
        </>
    );
};

export default Card;