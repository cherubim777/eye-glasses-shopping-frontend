import React from "react";

export default function Item(props){

   const token = localStorage.getItem('customerToken');
   const [product, setProduct] = React.useState({})
   if(props.product_id)
     {React.useEffect(() => {
        fetch('http://127.0.0.1:8000/product/getProduct/' + props.product_id)
          .then((response) => response.json()) // return parsed JSON data
          .then((data) => {
            console.log('->>' + data); // log the parsed JSON data
            setProduct(data) // set the products state variable
            
          })
          .catch((error) => console.error(error));
      }, [props.product_id]);}

      const handleDeleteCartItems = () => {
            fetch('http://127.0.0.1:8000/cart/delete/' + props.product_id, {
               method: 'DELETE',
               headers: {
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${token}`
               }
            })
            .then((response) => {props.reloadCart()})
            .catch((error) => console.error(error));
     }

    const customer =  
    <div className="item" >
        <img className="item-image" src={product.photo} alt="" />
        <div>
            <div className="item-name">{product.name}</div>
         </div>
        {props.for !== "wishlist" && <input className="item-quantity" type="number" placeholder="1" min={1} max={6} disabled value={props.quantity}/>}
        <div className="item-price">{`${product.price} ETB`}</div>
        {props.for !== "checkout" && <img className="trash-btn link-style" onClick={handleDeleteCartItems} src="/src/assets/trash.png" alt="trash image" />}
    </div> 

    const retailer = 
    <div className="item">
        <img className="item-image" src="/src/assets/sample-eyeglass3.png" alt="" />
    <div>
        <div className="item-name"></div>
        <div className="item-description"></div>
     </div>
     <div>
        <div className="item-name">Inventory</div>
        <div className="item-description">700</div>
     </div>
     <div>
        <div className="item-name">Sale</div>
        <div className="item-description">$1,000.60</div>
     </div>
     <div>
        <div className="item-name">Price</div>
        <div className="item-description">$1,000.60</div>
     </div>
     <div>
        <div className="item-name">Today</div>
        <div className="item-description">$17,000.60</div>
     </div>
</div> 

   const order = 
   <div className="item" style={{width: 500, textAlign: 'center'}}>
      <img className="item-image" src={props.photo} alt="" />
    <div>
        <div className="item-name">Name</div>
        <div className="item-description">{props.name}</div>
     </div>
    <div>
        <div className="item-name">Quantity</div>
        <div className="item-description">{props.quantity}</div>
     </div>
   </div>

    return(
       <>
            {props.user == "customer" && customer}
            {props.user == "retailer" && retailer}
            {props.user == "order" && order}
            
       </>
        
        
    )
}