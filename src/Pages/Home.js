import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authSelector, getInitialUserList, setLoggedIn, setUserLoggedIn } from "../Redux/Reducers/authReducer";
import { getInitialCartOrdersThunk } from "../Redux/Reducers/productReducer";

import FilterBar from "../Component/Home/FilterBar";
import MainContent from "../Component/Home/MainContent";

import styles from "../styles/home.module.css";
import Loader from "../Component/Loader/Loader";

export function Home(){

    const dispatch = useDispatch();
    const {isLoggedIn,userLoggedIn} = useSelector(authSelector);

    const [isLoading,setLoading]=useState(true);
    const [price,setPrice]=useState(5000);
    const [category,setCategory]=useState('none');
    const [search,setSearch]=useState('');

    useEffect(() => {
        dispatch(getInitialCartOrdersThunk());
    },[userLoggedIn]);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },400);

        const token=window.localStorage.getItem("token");
        if(token){
            const index=window.localStorage.getItem("index");
            const user=JSON.parse(index);
            dispatch(setLoggedIn(token));
            dispatch(setUserLoggedIn(user));
        }
    },[]);

    useEffect(()=>{
        dispatch(getInitialUserList());
    },[isLoggedIn]);
    

    return(
        <>
        {isLoading?<Loader />:
            <>
            <div className={styles.header}>
                
                <input type="text" 
                    placeholder="Search Item..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
             
            </div>


           <div className={styles.mainContainer}>
                <FilterBar price={price}
                                            setPrice={setPrice}
                                            setCategory={setCategory} />
                
                <MainContent search={search}
                             price={price}
                             category={category}
                            />
            </div>
        </>}
        </>
    );
}