
import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../icons.js'
const product = {
    name : 'test 1',
    price: '150',
    photo: 'https://picsum.photos/seed/picsum/200/300',
    quantity: 1,
}
function CartItem(){
    return(
        <div className="row no-gutters py-2">
        <div className="col-sm-2 p-2">
            <img
            alt={product.name}
            style={{margin: "0 auto", maxHeight: "50px"}} 
            src={product.photo} className="img-fluid d-block"/>
        </div>
        <div className="col-sm-4 p-2">
            <h5 className="mb-1">{product.name}</h5>
            <p className="mb-1">Price: {product.price} </p>
            
        </div>
        <div className="col-sm-2 p-2 text-center ">
             <p className="mb-0">Qty: {product.quantity}</p>
        </div>
        <div className="col-sm-4 p-2 text-right">
             <button 
             className="btn btn-primary btn-sm mr-2 mb-1">
                 <PlusCircleIcon width={"20px"}/>
             </button>
                 <button
                className="btn btn-danger btn-sm mb-1 mr-2">
                    <MinusCircleIcon width={"20px"}/>
                </button>   
                 <button
                className="btn btn-danger btn-sm mb-1 mr-2">
                    <TrashIcon width={"20px"}/>
                </button>
        </div>
    </div>
    )
}

export default CartItem;