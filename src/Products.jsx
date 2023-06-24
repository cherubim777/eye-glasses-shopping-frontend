import React from "react";
import Product from "./Product"

export default function Products(props){
    const [productClassName, setProductClassName] = React.useState(props.className)
    const [wishListItems,setWishListItems] = React.useState([]);
    const token = localStorage.getItem('customerToken')

    const handleExpand = () => {
        if(productClassName === "product-container"){
            setProductClassName(productClassName+"-expanded")
        }
        else{
            setProductClassName("product-container")
        }
    }

    React.useEffect(() => {
        if(!token) return

        fetch("http://127.0.0.1:8000/wishlist/wishlist", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
          .then((response) => response.json())
          .then((data) => {
              setWishListItems(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return(
        <div className= "products">
            {props.isHome && (<div className="products-header">
                <span className="products-category">{props.category}</span>
                <span className="products-expander link-style" onClick={handleExpand}>View all</span>
            </div>)}
            
            <div className={productClassName}>
            {props.products.map((product) => (
                 <Product key={product.id} id={product.id} product={product} wishListItems={wishListItems} setWishListItems={setWishListItems} user={props.user}/>
             ))}
            
             </div>
        </div>
    )
}