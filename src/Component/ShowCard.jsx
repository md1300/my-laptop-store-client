import { useEffect, useState } from "react";
import Card from "./Card"


const ShowCard = () => {
    const [products,setProducts]=useState([])

    

    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    
    
    
    return (
        <div>
            <h1>this is show card page</h1>
            {
                products.map((product,index)=><Card key={index} 
                product={product}
                ></Card>)
            }
        </div>
    );
};

export default ShowCard;