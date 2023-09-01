import {React,useRef} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styles from '../../Css/login.module.css'; // Import the CSS module
function Register() {

  const username = useRef()
  const password = useRef()

  const handleRegister =  (e) =>{
    e.preventDefault();
    const data = {
        "username":username.current.value,
        "password":password.current.value
    }
     axios.post('http://localhost:8000/user/create',data,{withCredentials:true})
    .then(response=>{
      if(response.status==200){
        console.log(response.data)
        window.location.href='/login'
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
    <div>
      <>
    <div className={styles['body-box']}>
    <div className={styles['login-form']}>
      <div className={styles['text']}>REGISTER</div>
      <form>
        <div className={styles['field']}>
          <div className={`fas fa-envelope ${styles['icon']}`}></div>
          <input type="text" placeholder="Username" ref={username} />
        </div>
        <div className={styles['field']}>
          <div className={`fas fa-lock ${styles['icon']}`}></div>
          <input type="password" placeholder="Password" ref={password} />
        </div>
        <button onClick={handleRegister}>REGISTER</button>
        <div className={styles['link']}>
          Already a member? <Link to={'/login'}>Login now</Link>
        </div>
      </form>
    </div>
    </div>
    </>
    </div>
  )
}

export default Register
