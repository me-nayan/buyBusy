import styles from "../../styles/home.module.css";
import ItemCard from "./ItemCard";
import { data } from "../../Assets/data";

export default function MainContent(props){

    const {search,price,category}=props;
    
    return(
        <div className={styles.itemContainer}>
            {/* filter on the basis of search bar */}
            {data.filter((item) => {
                    return search.toLocaleLowerCase() === ''
                    ? item
                    :item.name.toLocaleLowerCase().includes(search)})
            .filter((item) => {
                    return item.price <= price})
            .filter((item) => {
                    return category === 'none'
                    ? item
                    :item.category === category})
            .map((item) => <ItemCard 
                                    key={item.id} 
                                    item={item} />)}
        </div>
        
    )
}