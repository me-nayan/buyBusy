import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createUserThunk } from "../Redux/Reducers/authReducer";
import { useNavigate } from "react-router-dom";

import styles from "../styles/signIn.module.css";

export function SignUp(){
   
    const dispatch = useDispatch();
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();

    const navigate=useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const data={
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
      
        dispatch(createUserThunk(data));
        navigate("/signin");
    }
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.inputForm}>
                    <h1>SignUp</h1>
                    
                    <form onSubmit={handleSubmit}>
                        {/* name */}
                        <input type="text" 
                            placeholder="Name" 
                            required
                            ref={nameRef} />
                        {/* email */}
                        <input type="email" 
                            placeholder="Enter Email"
                            required 
                            ref={emailRef}/>
                        {/* password */}
                        <input type="password" 
                            placeholder="Enter Password"
                            required
                            ref={passwordRef} />
                        {/* submit button */}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}