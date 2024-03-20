import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../Redux/Reducers/authReducer";
import { clearCartThunk, productSelector, purchaseAllThunk } from "../Redux/Reducers/productReducer";

import CartItem from "../Component/Cart/CartItem";
import Loader from "../Component/Loader/Loader";

import Styles from "../styles/cart.module.css";

import { toast } from "react-toastify";


export function Cart(){

    const dispatch = useDispatch();
    const [isLoading,setLoading]=useState(true);
    const {userLoggedIn}=useSelector(authSelector);
    const {cart,total,itemInCart} = useSelector(productSelector);

    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);            
    },[]);

    function handlePurchase(){

        if(itemInCart === 0){
            toast.error("Nothing to purchase in Cart!!");    
            return;
        }
        dispatch(purchaseAllThunk());
        toast.success("Your order has been Placed!!!")
        navigate("/myorder");
    }
    


    return(
        <>
        {isLoading?<Loader />:
            <div className={Styles.mainContainer}>

                <div className={Styles.header}>
                    <div className={Styles.userInfo}>
                        <h1>Hey {userLoggedIn.name}, <small>Your Cart has</small></h1>
                    </div>
                    <div className={Styles.cartDetail}>     
                        <div>
                            Item: {itemInCart}
                            <br />
                            <button className={Styles.removeAll}
                                    onClick={() => dispatch(clearCartThunk())}>
                                Remove All
                            </button>
                        </div>

                        <div>
                            Total Amount: ₹{total}
                            <br />
                            <button className={Styles.purchaseAll}
                                    onClick={handlePurchase}>
                                Purchase All
                            </button>
                        </div>

                    </div>
                </div>

                <div className={Styles.itemContainer}>
                    {cart.length === 0 ?
                                    <h1>Nothing in Your Cart !!!</h1>
                                    :cart.map((product,i) => <CartItem key={i}
                                                        product={product}/>)}
                </div>
            </div>
        }
        </>
    );
}