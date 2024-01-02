import React from "react";
import Form from "react-bootstrap/Form";

export const Footer = () => {
  return (
    <>
      <div className="main-container-footer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "80%",
            margin: "auto",
            fontSize: ".8rem",
            flexWrap: "wrap",
          }}
        >
          <div></div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <img
              style={{ maxWidth: "25px", maxHeight: "25px" }}
              src="/HomePage/phone.png"
              alt="phone"
            />
            <p>(+22) 123 - 4567 - 900</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <img
              style={{ maxWidth: "25px", maxHeight: "25px", flexWrap: "wrap" }}
              src="/HomePage/message.png"
              alt="phone"
            />
            <p>support@oasisnotes.com</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <img
              style={{ maxWidth: "25px", maxHeight: "25px" }}
              src="/HomePage/Vector.png"
              alt="facebook"
            />
            <img
              style={{ maxWidth: "25px", maxHeight: "25px" }}
              src="/HomePage/Vector-1.png"
              alt="facebook"
            />
            <img
              style={{ maxWidth: "25px", maxHeight: "25px" }}
              src="/HomePage/Vector-2.png"
              alt="facebook"
            />
          </div>
        </div>
        <div className="footer-bottom-container">
          <div
            style={{
              width: "100%",
              margin: "auto",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            <div>
              “A Simple Story About The Doctorate Medical Center & Health Care
              Foundation
            </div>
          </div>
          <div style={{ width: "100%", margin: "auto" }}>
            <div>
            
              <p>Explore</p>
              <p>Home </p>
              <p>About us</p>
              <p>Testimonials</p>
              <p>News</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <div>
              <p>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                    style={{ width: "100%", borderRadius: "0px" }}
                  />
                </Form.Group>
              </p>
              <button
                style={{
                  padding: "0.5rem 1.5rem",
                  color: "#1A9FB2",
                  border: "none",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
