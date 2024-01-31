import { useNavigate } from "react-router-dom";
import "./css/AboutPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

const TermandContion = () => {
  const navigate = useNavigate();
  const [contect, setContect] = useState("");
  const [question, setQuestion] = useState([]);

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

  const questionAwnser = async () => {
    try {
      const res = await axios.get(`${BaseUrl}static/getTerms`);
      setQuestion(res.data?.data);
      
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    contectDetail();
    questionAwnser();
  }, []);

  return (
    <div className="support-page">
    <div className="support-page-container">
      <p>Oasis Notes</p>
    </div>
    <div className="support-page-container22121">
      <div className="support-page-container225">
        <div className="support-page-container-term">
          <span style={{paddingLeft:"1rem"}}>Term and Condition</span>
        </div>
              <p>{question?.terms}</p>
         <div>
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


    // <div className="support-page">
    //   <div className="support-page-container">
    //     {/* <p>Clinical Advisors</p> */}
    //     <p>OasisNotes </p>
    //   </div>
    //   <div>
    //     <p
    //       style={{
    //         textAlign: "center",
    //         fontSize: "1.4rem",
    //         fontWeight: "700",
    //         color: "#AF110C",
    //         lineHeight: "2rem",
    //         width: "70%",
    //         margin: "auto",
    //       }}
    //     >
    //       OasisNotes created this Clinical Advisory Board to ensure that we
    //       develop solustion that support the highest clinical standards.
    //     </p>
    //   </div>
    //   <div style={{ marginTop: "2rem" }}>
    //     <div>
    //       <p
    //         style={{
    //           textAlign: "center",
    //           width: "70%",
    //           margin: "auto",
    //           color: "#0152A8",
    //           fontWeight: "bold",
    //           fontSize: "1.2rem",
    //           marginBottom: "3rem",
    //         }}
    //       >
    //         In addiction to our in-house clinical team, the board plays multiple
    //         roles to support our customers success.
    //       </p>
    //       <div className="about-page-container2">
    //         <div>
    //           <img
    //             style={{
    //               maxWidth: "170px",
    //               maxHeight: "170px",
    //               width: "auto",
    //               height: "auto",
    //             }}
    //             src="/AboutPage/employee.png"
    //             alt="employee"
    //           />
    //           <div>
    //             <p
    //               style={{
    //                 fontWeight: "bold",
    //                 color: "#AF110C",
    //                 lineHeight: "1rem",
    //                 marginTop: "1rem",
    //               }}
    //             >
    //               Employee 1
    //             </p>
    //             <p>
    //               Employee 1 , is the Director of Behavioral Health for
    //               Accreditation Guru, a National consulting firm dedicated to
    //               helping social service, behavioral health, and education...
    //             </p>
    //             <p
    //               onClick={() => navigate("/about/clinical-advisors/:boss")}
    //               style={{
    //                 color: "#AF110C",
    //                 fontWeight: "bold",
    //                 margin: "0",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //                 cursor: "pointer",
    //               }}
    //             >
    //               Learn More &gt;
    //             </p>
    //           </div>
    //         </div>
    //         <div>
    //           <img
    //             style={{
    //               maxWidth: "170px",
    //               maxHeight: "170px",
    //               width: "auto",
    //               height: "auto",
    //             }}
    //             src="/AboutPage/employee.png"
    //             alt="employee"
    //           />
    //           <div>
    //             <p
    //               style={{
    //                 fontWeight: "bold",
    //                 color: "#AF110C",
    //                 lineHeight: "1rem",
    //                 marginTop: "1rem",
    //               }}
    //             >
    //               Employee 1
    //             </p>
    //             <p>
    //               Employee 1 , is the Director of Behavioral Health for
    //               Accreditation Guru, a National consulting firm dedicated to
    //               helping social service, behavioral health, and education...
    //             </p>
    //             <p
    //               style={{
    //                 color: "#AF110C",
    //                 fontWeight: "bold",
    //                 margin: "0",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               Learn More &gt;
    //             </p>
    //           </div>
    //         </div>
    //         <div>
    //           <img
    //             style={{
    //               maxWidth: "170px",
    //               maxHeight: "170px",
    //               width: "auto",
    //               height: "auto",
    //             }}
    //             src="/AboutPage/employee.png"
    //             alt="employee"
    //           />
    //           <div>
    //             <p
    //               style={{
    //                 fontWeight: "bold",
    //                 color: "#AF110C",
    //                 lineHeight: "1rem",
    //                 marginTop: "1rem",
    //               }}
    //             >
    //               Employee 1
    //             </p>
    //             <p>
    //               Employee 1 , is the Director of Behavioral Health for
    //               Accreditation Guru, a National consulting firm dedicated to
    //               helping social service, behavioral health, and education...
    //             </p>
    //             <p
    //               style={{
    //                 color: "#AF110C",
    //                 fontWeight: "bold",
    //                 margin: "0",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               Learn More &gt;
    //             </p>
    //           </div>
    //         </div>
    //         <div>
    //           <img
    //             style={{
    //               maxWidth: "170px",
    //               maxHeight: "170px",
    //               width: "auto",
    //               height: "auto",
    //             }}
    //             src="/AboutPage/employee.png"
    //             alt="employee"
    //           />
    //           <div>
    //             <p
    //               style={{
    //                 fontWeight: "bold",
    //                 color: "#AF110C",
    //                 lineHeight: "1rem",
    //                 marginTop: "1rem",
    //               }}
    //             >
    //               Employee 1
    //             </p>
    //             <p>
    //               Employee 1 , is the Director of Behavioral Health for
    //               Accreditation Guru, a National consulting firm dedicated to
    //               helping social service, behavioral health, and education...
    //             </p>
    //             <p
    //               style={{
    //                 color: "#AF110C",
    //                 fontWeight: "bold",
    //                 margin: "0",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               Learn More &gt;
    //             </p>
    //           </div>
    //         </div>
    //         <div>
    //           <img
    //             style={{
    //               maxWidth: "170px",
    //               maxHeight: "170px",
    //               width: "auto",
    //               height: "auto",
    //             }}
    //             src="/AboutPage/employee.png"
    //             alt="employee"
    //           />
    //           <div>
    //             <p
    //               style={{
    //                 fontWeight: "bold",
    //                 color: "#AF110C",
    //                 lineHeight: "1rem",
    //                 marginTop: "1rem",
    //               }}
    //             >
    //               Employee 1
    //             </p>
    //             <p>
    //               Employee 1 , is the Director of Behavioral Health for
    //               Accreditation Guru, a National consulting firm dedicated to
    //               helping social service, behavioral health, and education...
    //             </p>
    //             <p
    //               style={{
    //                 color: "#AF110C",
    //                 fontWeight: "bold",
    //                 margin: "0",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               Learn More &gt;
    //             </p>
    //           </div>
    //         </div>
    //         <div>
    //           <img
    //             style={{
    //               maxWidth: "170px",
    //               maxHeight: "170px",
    //               width: "auto",
    //               height: "auto",
    //             }}
    //             src="/AboutPage/employee.png"
    //             alt="employee"
    //           />
    //           <div>
    //             <p
    //               style={{
    //                 fontWeight: "bold",
    //                 color: "#AF110C",
    //                 lineHeight: "1rem",
    //                 marginTop: "1rem",
    //               }}
    //             >
    //               Employee 1
    //             </p>
    //             <p>
    //               Employee 1 , is the Director of Behavioral Health for
    //               Accreditation Guru, a National consulting firm dedicated to
    //               helping social service, behavioral health, and education...
    //             </p>
    //             <p
    //               style={{
    //                 color: "#AF110C",
    //                 fontWeight: "bold",
    //                 margin: "0",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               Learn More &gt;
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};

export default TermandContion;
