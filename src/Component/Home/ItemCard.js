import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../Redux/Reducers/productReducer";

import styles from "../../styles/home.module.css";


export default function ItemCard(props){

    
    const dispatch = useDispatch();
    

    const {name,image,price,category}=props.item;


    return(
        <>  
            <div className={styles.cardContainer} >
                
                <div className={styles.imageContainer}>
                    <img src={image} alt={category} />
                </div>

                <div className={styles.itemInfo}>
                    <div className={styles.namePrice}>
                        <div className={styles.name}>
                            {name}
                        </div>

                        <div className={styles.price}>
                            ₹{price}   
                        </div>
                    </div>
                    

                    <div className={styles.btnContainer}>
                        <button className={styles.addBtn}
                                onClick={() => dispatch(addToCartThunk(props.item))}>
                            Add to Cart
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}