import React,{useEffect,useState} from 'react'
import {show_notification} from "../Api_collection/Api"
import { useNavigate,useParams } from 'react-router-dom';

function SuccessPaymentPage() {
    const navigate=useNavigate();
    const { userId } = useParams();

    const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

    useEffect( async()=>{
        try {
            const res = await axios.post(`${BaseUrl}verifySubscription/${userId}`,{
                Status: Paid
            });
            show_notification("payment success !","Payment Succesfull","success")
            navigate("/")
          } catch (error) {
            show_notification("payment Fail !","Something wrong","danger")
          }
    },[])

  return (
    <div style={{marginTop:"2rem", textAlign:"center",fontSize:"2rem"}}>Payment Successfull</div>
  )
}

export default SuccessPaymentPage