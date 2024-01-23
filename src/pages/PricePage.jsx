import { useEffect, useState } from "react";
import "./css/PricePage.css";
import axios from "axios";
import { get_PricingData } from "../Api_collection/Api.js";
import Accordion from "react-bootstrap/Accordion";

const PricePage = () => {
  const [pricing, setPricing] = useState([]);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(0);
  const [showFpq, setShowFpq] = useState(false);
  const [fpq, setFpq] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getPricingData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Pricing/getPricing`);
      setPricing(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPricingFpq = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Pricing/getPricingFAQ`);
      setFpq(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPost = async () => {
    try {
      const res = await axios.post(`${BaseUrl}Pricing/calculatePricing`, {
        noOfUser: user,
      });
      setUserData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setPricing(get_PricingData());
    getPricingData();
    getPricingFpq();
  }, []);



  const buttonStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "0.2rem 1rem",
    borderRadius: "55px",
    backgroundColor: "#AF110C",
    color: "white",
    border: "none",
    fontSize: "1rem",
  };
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Pricing</p>
      </div>
      <div className="pricing-page-container">
        <p
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "#AF110C",
            lineHeight: "2rem",
          }}
        >
          {fpq?.heading}
        </p>
        <div className="pricing-page-container2">
          {pricing?.map((item, i) => (
            <>
              <div
                key={i}
                style={{
                  border: "1px solid grey",
                  maxWidth: "300px",
                  // maxHeight: "180px",
                  width: "auto",
                  height: "auto",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1A9FB2",
                    color: "white",
                    padding: "1rem",
                    fontWeight: "500",
                  }}
                >
                  User {item?.till}
                  {/* Each User: 1-10 */}
                </p>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#1A9FB2",
                      lineHeight: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    ${item?.perUser}/ User
                  </p>
                  <p
                    style={{
                      fontSize: ".8rem",
                      fontWeight: "bold",
                      color: "#AF110C",
                    }}
                  >
                    PER MONTH
                  </p>
                  {
                    item?.details?.map((data,i)=>(
                      <p key={i}>{data}</p>
                    ))
                  }
                </div>
              </div>
            </>
          ))}
        </div>
        {/* <div
          style={{
            width: "78%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#AF110C",
            flexWrap: "wrap",
          }}
        >
          <p>Unlimited User (You can add unlimited BHT's, Nurses, Behavioral Health Professionals, and other contractors)  </p>
          <p>Unlimited Data</p>
          <p>Unilimited Training/ Support</p>
          <p>Tracking Tools for Residents and employee's</p>
          <p style={{ paddingRight: "2%" }}>Appointment Tracking and reminder</p>
          <p>Medication Administration Record</p>
          <p>Administration Tracking</p>
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <button style={buttonStyle} onClick={() => setShowFpq(!showFpq)}>
            Billing FAQs
          </button>
          {showFpq && (
            <div className="container d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                {fpq?.faqs?.map((item, i) => (
                  <Accordion defaultActiveKey="0" key={i}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header style={{ fontSize: "14px" }}>
                        {item?.question}
                      </Accordion.Header>
                      <Accordion.Body style={{ fontSize: "14px" }}>
                        {" "}
                        {item?.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </div>
            </div>
          )}

          {/* <button style={buttonStyle}>
            Sales Tax May be Applicable for your State
          </button> */}
        </div>
        <div style={{ width: "60%", margin: "auto", textAlign: "center" }}>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#AF110C" }}
          >
            {fpq?.title}
          </p>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            {fpq?.description}
          </p>
        </div>
        <div className="price-calculator-page">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Number of User</p>
            <img
              style={{ width: "45px" }}
              src="/PricingPage/users.png"
              alt=""
            />
            <input
              type="text"
              style={{
                border: "1px solid black",
                minWidth: "140px",
                maxWidth: "145px",
                maxHeight: "40px",
                width: "auto",
                height: "auto",
                marginTop: "1rem",
                textAlign: "center",
                outline: "none",
              }}
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            {/* <p></p> */}
            <button
              style={{
                fontSize: "1.2rem",
                backgroundColor: "#26427E",
                padding: ".5rem 1rem",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "1.5rem",
              }}
              onClick={getUserPost}
            >
              Calculate
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Total</p>
            <p
              style={{
                border: "none",
                minWidth: "140px",
                maxWidth: "145px",
                minHeight: "60px",
                maxHeight: "60px",
                width: "auto",
                height: "auto",
                marginTop: "1rem",
                textAlign: "center",
                backgroundColor: "#DDDDDD",
                display: "grid",
                placeItems: "center",
                fontWeight: "bold",
              }}
            >
              {userData}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
