import React from "react";
import "./css/NotesPage.css";
import { Button, Form } from "react-bootstrap";
const NotesPage = () => {
  return (
    <div className="support-page">
      <div
        style={{
          padding: "2rem 0rem",
          height: "auto",
          fontWeight: "500",
          fontSize: "1.5rem",
        }}
        className="support-page-container"
      >
        <p>How can we help you today?</p>
        <div
          style={{
            display: "flex",
            borderRadius: "0px",
            width: "60%",
          }}
        >
          <Form.Control
            style={{
              borderRadius: "8px 0px 0px 8px",
            }}
            type="text"
            placeholder="Enter your search term here"
          />{" "}
          <Button
            style={{
              borderRadius: "0px 8px 8px 0px",
              backgroundColor: "#545454",
              color: "white",
              height: "2.9rem",
              padding: "0rem 1.8rem",
            }}
          >
            Search
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            borderRadius: "0px",
            width: "60%",
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                width: "auto",
                height: "auto",
              }}
              src="../../OasisNotesPage/add.png"
              alt="add"
            />
            <p>New support ticket</p>
          </div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                width: "auto",
                height: "auto",
              }}
              src="../../OasisNotesPage/document.png"
              alt="add"
            />
            <p>Check ticket status</p>
          </div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                width: "auto",
                height: "auto",
              }}
              src="../../OasisNotesPage/call.png"
              alt="add"
            />
            <p>1234567890</p>
          </div>
        </div>
      </div>
      <div className="notes-page-container2">
        <div className="notes-page-container21">
          {" "}
          <div
            style={{
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                paddingTop: "2.5rem",
              }}
            >
              Whet's New
            </p>
            <p style={{ paddingBottom: "3rem" }}>
              This will have information on new and exiting updates to
              OasisNotes!
            </p>{" "}
          </div>
          <div
            style={{
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                paddingTop: "2.5rem",
              }}
            >
              Whet's New
            </p>
            <p style={{ paddingBottom: "3rem" }}>
              This will have information on new and exiting updates to
              OasisNotes!
            </p>{" "}
          </div>
          <div
            style={{
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                paddingTop: "2.5rem",
              }}
            >
              Whet's New
            </p>
            <p style={{ paddingBottom: "3rem" }}>
              This will have information on new and exiting updates to
              OasisNotes!
            </p>{" "}
          </div>
          <div
            style={{
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                paddingTop: "2.5rem",
              }}
            >
              Whet's New
            </p>
            <p style={{ paddingBottom: "3rem" }}>
              This will have information on new and exiting updates to
              OasisNotes!
            </p>{" "}
          </div>
          <div
            style={{
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                paddingTop: "2.5rem",
              }}
            >
              Whet's New
            </p>
            <p style={{ paddingBottom: "3rem" }}>
              This will have information on new and exiting updates to
              OasisNotes!
            </p>{" "}
          </div>
          <div
            style={{
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                paddingTop: "2.5rem",
              }}
            >
              Whet's New
            </p>
            <p style={{ paddingBottom: "3rem" }}>
              This will have information on new and exiting updates to
              OasisNotes!
            </p>{" "}
          </div>
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Recent articles
          </p>
          <p>
            <li>Readmit a Client </li>{" "}
            <li>parent-Guardian Portal demonstration </li>
            <li>Adult Portal demonstration</li>
            <li>OutcomeTools Demonstration (Video)</li>
            <li>OasisNotes insurance billing and electronic claims review</li>
          </p>
        </div>
      </div>
      <div
        style={{
          padding: "2rem 0rem",
          height: "auto",
          fontWeight: "500",
          fontSize: "1.2rem",
        }}
        className="support-page-container"
      >
        <p>Contact Us :1234567890</p>
      </div>
      <div
        style={{
          backgroundColor: "#222222",
          color: "white",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          fontWeight: "400",
        }}
      >
        <p style={{ paddingTop: ".5rem" }}>
          @ 2023 Themes by Helpdesk Theme . All rights reserved
        </p>
       
      </div>
    </div>
  );
};

export default NotesPage;
