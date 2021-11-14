import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const About = () => {
    const navigate=useNavigate();


    
    useEffect(()=>{
        const callAboutPage=async ()=>{
            try{
                const res=await fetch ('/about',{
                    method:"GET",
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                });
                const data= await res.json();
                if(!data.status===200){
                    const error= new Error(res.error);
                    throw error;
                }
    
    
    
            }catch(err){
                console.log(err);
                window.alert('Pls Login to continue');
                navigate('/login')
    
            }
        }

        callAboutPage();
        //eslint-disable-next-line
    },[]);
    return (
        <>
       <Navbar/>
       <div className="container emp-profile">
           <form method="GET">

            </form>


           <h1>MERN Stack Project</h1>

       </div>
       </>
    )
}

export default About
