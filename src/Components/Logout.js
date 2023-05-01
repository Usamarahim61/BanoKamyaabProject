import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();

const Logout = async ()=>{
    try {
        const res = await fetch('/Logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res)=>{
        navigate("/Login" , {replace:true});        
        
        if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }
        })
  

    } catch (err) {
  
        console.log(err);

  
    }
}

useEffect(() => {
    Logout();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Logout
