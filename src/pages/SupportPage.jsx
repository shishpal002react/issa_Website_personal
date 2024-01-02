import "./css/Support.css";
import { useState, useEffect } from "react";
import axios from "axios";
const SupportPage = () => {
  const [contect, setContect] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const contectDetail = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}ContactDetails/viewContactDetails`
      );
      setContect(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contectDetail();
  }, []);
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Support & Training</p>
      </div>
      <div className="support-page-container2">
        <div className="support-page-container21">
          <div className="support-page-container211">
            <span>Training Session Link</span>
            <span>
              <img src="/SupportPage/zoom.png" alt="zoom" />
            </span>
          </div>
          <div className="support-page-container211">
            <span>OasisNotes Support</span>
            <span>
              <img
                style={{
                  minWidth: "2rem",
                  minHeight: "2rem",
                }}
                src="/SupportPage/notes.png"
                alt="zoom"
              />
            </span>
          </div>
          <div
            className="support-page-container212"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {" "}
            <div>
              <p
                style={{
                  color: "#1A9FB2",
                  marginTop: "1rem",
                  borderTop: "1px solid black",
                }}
              >
                OasisNotes Training and Implementation Process
              </p>
              <p style={{ color: "#AF110C" }}>
                What are the OasisNotes hours of operation?
              </p>
              <p style={{ fontSize: "1rem" }}>
                OasisNotes is located in Idaho and available for training and
                support Monday through Friday, 8 am to 5 pm Mountain Time. An
                after-hours number is available to call for emergencies.
              </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div>
              <p style={{ color: "#AF110C", marginTop: "1rem" }}>
                What happens immediately after I subscribe?
              </p>
              <p style={{ fontSize: "1rem" }}>
                Within the same or next business day, your company will be
                emailed to schedule your first training. Zoom is used for
                training sessions.
              </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div>
              <p style={{ color: "#AF110C" }}>
                Who needs to attend the first training session?
              </p>
              <p style={{ fontSize: "1rem" }}>
                Key decision makers, including the person acting as your main
                system administrator, should attend. The training session
                typically lasts 1 hour.
              </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div>
              <p style={{ color: "#1A9FB2" }}>
                Non-Supported Operating Systems (OS) Minimum System Requirements
                Minimum Hardware
              </p>
              <button
                style={{
                  fontSize: "1rem",
                  backgroundColor: "#AF110C",
                  padding: "0.5rem 1.5rem",
                  color: "white",
                  border: "none",
                  borderRadius: "55px",
                }}
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
        <div className="support-page-container22">
          <div>
            <p
              style={{
                color: "#1A9FB2",
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              OasisNotes Support
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Hours
              </span>
              <br />
              <span style={{ color: "black", fontWeight: "bold" }}>
                {contect?.hours}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Technical Support:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.technicalSupport}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Schedule Training:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.scheduleTraining}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "#1A9FB2", fontWeight: "bold" }}>
                Questions, Suggestions, or Comments:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.teamEmail}
              </span>
            </p>
            <p style={{ marginBottom: "2rem" }}>
              <span style={{ color: "black", fontSize: ".8rem" }}>
                For after hours, emergency support please call:
              </span>
              <br />
              <span style={{ color: "#AF110C", fontWeight: "bold" }}>
                {contect?.emergencyPhone}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
