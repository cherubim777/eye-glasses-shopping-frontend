import React from "react";

export default function Item(props){

    const customer =  
    <div className="item">
        <img className="item-image" src="src/assets/sample-eyeglass3.png" alt="" />
        <div>
            <div className="item-name">Product Name</div>
            <div className="item-description">Product Description</div>
         </div>
        <input className="item-quantity" type="number" placeholder="1" min={1} max={6}/>
        <div className="item-price">$432</div>
        <img className="trash-btn" src="src/assets/trash.png" alt="trash image" />
    </div> 

    const retailer = 
    <div className="item">
        <img className="item-image" src="src/assets/sample-eyeglass3.png" alt="" />
    <div>
        <div className="item-name">Samsung S20 128 GB</div>
        <div className="item-description">Pink - 50 orders</div>
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

    return(
       <>
            {props.user == "customer" ? customer : retailer}
       </>
        
        
    )
}