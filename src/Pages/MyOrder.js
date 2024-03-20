import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { productSelector } from "../Redux/Reducers/productReducer";

import OrderDetail from "../Component/MyOrder/OrderDetail";
import Loader from "../Component/Loader/Loader";

import styles from "../styles/myorder.module.css";

export function MyOrder(){

    const {myorders} = useSelector(productSelector);
    const [isLoading,setLoading]=useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);            
    },[]);

    
    return(
        <>
        {isLoading?<Loader/>:
            <div className={styles.mainContainer}>
                <h1 className={styles.orderHeading}>
                    My Orders
                </h1>
                {myorders.length === 0?
                    <>  
                        <h1>You haven't placed any order yet !!</h1>    
                    </>
                    :
                    <div className={styles.orderListContainer}>
                        {myorders.map((order,i) => <OrderDetail key={i} order={order} />)}
                    </div>
                }
            </div>
        }
        </>
    );
}