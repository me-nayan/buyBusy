
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/navbar.module.css";
import { Outlet, NavLink } from "react-router-dom";
import { authSelector, removeSessionThunk } from "../../Redux/Reducers/authReducer";

export default function Navbar(){

    const dispatch=useDispatch();
    
    const {isLoggedIn}=useSelector(authSelector);

    
    return(
        <>
            <div className={styles.navbarContainer}> 
                <div className={styles.appName}>
                    <NavLink to="/">
                        <i class="fa-solid fa-shop"></i>
                        &nbsp;
                        Buy Busy
                    </NavLink>
                </div>
                <div className={styles.navLinks}>
                    <NavLink to="/">
                        <span>
                            <i class="fa-solid fa-house"></i>
                            &nbsp;
                            Home
                        </span>
                    </NavLink>

                    {/* myorder link */}
                    {/* show when user is logged in */}
                    {isLoggedIn && <NavLink to="/myorder">
                        <span>
                            <i class="fa-solid fa-bag-shopping"></i>
                            &nbsp;
                            My Order
                        </span>
                    </NavLink> }


                    {/* cart link */}
                    {/* show when user is logged in */}
                    {isLoggedIn && <NavLink to="/cart">
                        <span>
                            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                            &nbsp;
                            Cart
                        </span>
                    </NavLink> }


                    {/* for signIN and signOut */}
                    <NavLink to={!isLoggedIn?"/signin":"/"}>
                        <span>
                            {!isLoggedIn?
                                <>
                                    <i class="fa-solid fa-right-to-bracket"></i>
                                    &nbsp;
                                    SignIn
                                </>
                                :
                                <>
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                    &nbsp;
                                    <span onClick={() => dispatch(removeSessionThunk())}>SignOut</span>
                                </>
                            }
                        </span>
                    </NavLink>
                </div>
            </div>
            {/* render child pages */}
            <Outlet />
        </>
    )
}