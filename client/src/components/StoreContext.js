import {useState,createContext} from 'react'

const storage ={
    items: localStorage.getItem("items")? JSON.parse(localStorage.getItem("items")) : [],
    totalPrice: localStorage.getItem("totalPrice")?JSON.parse(localStorage.getItem("totalPrice")):0,
}
const storeObj ={
    cart: {items:storage.items,totalPrice: storage.totalPrice},
    user:{},
    token: "",
}
export const StoreContext = createContext(storeObj);

export const updateLocal=(prods,price)=>{
localStorage.setItem("items",JSON.stringify(prods));
localStorage.setItem("totalPrice",JSON.stringify(price))
}
const Store =({children})=>{
const [store,updateStore]=useState(storeObj)
 return <StoreContext.Provider value ={[store,updateStore]}>
  {children}
 </StoreContext.Provider>   
}
export default Store;
