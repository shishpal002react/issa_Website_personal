import { useEffect, useState } from "react";
import "./css/PricePage.css";
import axios from "axios";

const PricePage = () => {
  const [pricing, setPricing] = useState([]);

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getPricingData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Pricing/getPricing`);
      setPricing(res?.data?.data);
      console.log(res?.data?.data, "data is print");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPricingData();
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
          Straightforward, Transparent Pricing: No Hidden Costs.
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
                  Each User: {item?.till}
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
                </div>
              </div>
            </>
          ))}
        </div>
        <div
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
          <p>Unlimited Data</p>
          <p>Month to Month contract</p>
          <p>No Upfront Fees</p>
          <p style={{ paddingRight: "4.2%" }}>Unlimited Training / Support</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <button style={buttonStyle}>Billing FAQs</button>
          <button style={buttonStyle}>
            Sales Tax May be Applicable for your State
          </button>
        </div>
        <div style={{ width: "60%", margin: "auto", textAlign: "center" }}>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#AF110C" }}
          >
            Get Started with Our Cost Calculator
          </p>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            Enter a number to increase or decrease the number of users you
            need.The dynamic calculator will show the cost for the number of
            users.
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
            <p>Number of Useres</p>
            <img
              style={{ width: "45px" }}
              src="/PricingPage/users.png"
              alt=""
            />
            <p
              style={{
                border: "1px solid black",
                minWidth: "140px",
                maxWidth: "145px",
                maxHeight: "40px",
                width: "auto",
                height: "auto",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              1
            </p>
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
              }}
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
              50000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;