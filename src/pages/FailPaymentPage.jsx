import React,{useEffect,useState} from 'react'
import {show_notification} from "../Api_collection/Api"
import { useNavigate } from 'react-router-dom';

function FailPaymentPage() {
    const navigate=useNavigate();


    useEffect( async()=>{
        try {
            const res = await axios.post(`${BaseUrl}verifySubscription/${id}`,{
                Status:"Fail"
            });
            show_notification("payment Fail !","Payment Fail","danger")
            navigate("/")
          } catch (error) {
            show_notification("payment Fail !","Something wrong","danger")
          }
    },[])

  return (
    <div style={{marginTop:"2rem", textAlign:"center",fontSize:"2rem"}}>Payment Fail</div>
  )
}

export default FailPaymentPage;