import React, { useEffect,useState } from 'react';
import axios from 'axios'; // Import axios
import { show_notification } from "../Api_collection/Api";
import { useNavigate, useParams, useLocation  } from 'react-router-dom';

function SuccessPaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show,setShow]=useState(false);

const BaseUrl = import.meta.env.VITE_API_BASEURL;

const {id} = useParams();
const fullString = id || '';
const idMatch = fullString.match(/^[^-]+/);
const parent_id = idMatch ? idMatch[0] : null;
const amountMatch = fullString.match(/-amount=(\d+)/);
const amount = amountMatch ? amountMatch[1] : null;


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
   
    const paymentId = searchParams.get('paymentId');
    const token = searchParams.get('token');
    const payerId = searchParams.get('PayerID');

  

    const verifySubscription = async () => {
      try {
 
        const res2 = await axios.get(`${BaseUrl}successOrderForPaypal?paymentId=${paymentId}&PayerID=${payerId}&amount=${amount/100}`);
        
          const res1 = await axios.post(`${BaseUrl}verifySubscription/${parent_id}`, {
            Status: "Paid"
          });
          setShow(true)

        show_notification("Payment success!", "Payment Successful", "success");

        navigate("/");
      } catch (error) {
        console.error('API call error:', error);
        show_notification("Payment Fail!", "Something went wrong", "danger");
      }
    };

    if(parent_id){
      verifySubscription();
    }
    
    
  }, [parent_id, navigate, BaseUrl]);

  return (
    <>
    {
      show ? <div style={{ marginTop: "2rem", textAlign: "center", fontSize: "2rem" }}>Payment Successful</div>:<div style={{ marginTop: "2rem", textAlign: "center", fontSize: "2rem",visibility: "0" }}>...</div>
    }
    </>
  );
}

export default SuccessPaymentPage;
