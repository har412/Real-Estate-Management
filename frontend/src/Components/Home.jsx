import React, { useEffect } from 'react'
import { useState } from 'react'
import axios  from 'axios'
import Navbar from './Navbar';
function Home() {
const [user,setuser] = useState();
  useEffect( ()=>{
     axios.get('http://localhost:8000/user',{withCredentials:true})
    .then(response =>{
      console.log(response.data)
      setuser(response.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

 const  handleLogout=()=>{
     axios.get('http://localhost:8000/user/logout',{withCredentials:true})
    .then(res=>{
      if(res.status==200){
        window.location.href='/login'
      }
      else{
        console.log(res.data)
      }
    })
  }
  return (
    <>
    <Navbar/>
   
    <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Find A <span class="text-primary">Perfect Home</span> To Live With Your Family</h1>
                    <p class="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <div class="owl-carousel header-carousel">
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="img/carousel-1.jpg" alt=""/>
                        </div>
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="img/carousel-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div>
      <h1>Home</h1>
      <h1>{user?.username}</h1>
       {user&& <button onClick={handleLogout}>Logout</button>}
    </div>
    </>
  )
}

export default Home
