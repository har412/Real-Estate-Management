import React, { useRef } from 'react';
import {Link, history} from 'react-router-dom'
import styles from '../../Css/login.module.css'; // Import the CSS module
import axios  from 'axios'





function Login() {

    const username = useRef()
    const password = useRef()

    const handleLogin =  (e) =>{
        e.preventDefault();
        const data = {
            "username":username.current.value,
            "password":password.current.value
        }
         axios.post('http://localhost:8000/user/login',data,{withCredentials:true})
        .then(response=>{
          if(response.status==200){
            console.log(response.data)
            window.location.href='/home'
          }
            else{
              console.log(response.data)
            }
        })
        .catch(err=>{
            console.log(err)
        })


    }

  return (
    <>
    <div className={styles['body-box']}>
    <div className={styles['login-form']}>
      <div className={styles['text']}>LOGIN</div>
      <form>
        <div className={styles['field']}>
          <div className={`fas fa-envelope ${styles['icon']}`}></div>
          <input type="text" placeholder="Username" ref={username} />
        </div>
        <div className={styles['field']}>
          <div className={`fas fa-lock ${styles['icon']}`}></div>
          <input type="password" placeholder="Password" ref={password} />
        </div>
        <button onClick={handleLogin}>LOGIN</button>
        <div className={styles['link']}>
          Not a member? <Link to={'/register'}>Signup now</Link>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;
