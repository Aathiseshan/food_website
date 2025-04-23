import { createContext, useState } from "react";
import {food_list} from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const[carItem,setCartItem]=useState({});

    const addToCart = (itemId)=>{
        if(!carItem[itemId]){
          setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
          setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
      setCartItem((prev=>({...prev,[itemId]:prev[itemId]-1})))
    }

   const getTotalCartAmount = () => {
    let totalAmt = 0;
    for( const item in carItem){
      if(carItem[item]>0){
        let itemInfo = food_list.find((product)=>product._id===item);
        totalAmt += itemInfo.price * carItem[item];
      }
      

    }
    return totalAmt;

   }

  const contexValue = {
    food_list,
    carItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contexValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
