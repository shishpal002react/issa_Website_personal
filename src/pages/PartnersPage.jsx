import { useNavigate } from "react-router-dom";
import "./css/Partners.css";
const PartnerPage = () => {
  const navigate = useNavigate();
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Partners</p>
      </div>
      <div className="partner-page-container2">
        <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Clearinghouses{" "}
        </p>
        <p style={{ color: "#545454", fontSize: ".8rem" }}>
          ICANotes is focused on helping our customers implement complete
          solutions for their clinical documentation, billing,and practice
          management needs.
        </p>
        <div className="partner-page-container21">
          <div className="partner-page-container2111">
            <div>
              <img
                style={{
                  maxWidth: "190px",
                  maxHeight: "50px",
                  width: "auto",
                  height: "auto",
                  marginBottom: "1rem",
                }}
                src="/PartnersPage/waystar.png"
                alt="partner"
              />
            </div>
            <p>
              Waystar simplifies and unifies the healthcare revenue cycle with
              innovative technology thatallows clients to collect more with less
              cost and less stress, so they can focus on their goals,patients,
              and communities.
              <br />
              <button
                style={{
                  padding: "0.5rem 1.5rem",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  marginTop: "1rem",
                }}
              >
                Learn More
              </button>
            </p>
          </div>
          <div className="partner-page-container2111">
            <div>
              <img
                style={{
                  maxWidth: "190px",
                  maxHeight: "50px",
                  width: "auto",
                  height: "auto",
                  marginBottom: "1rem",
                }}
                src="/PartnersPage/ability.png"
                alt="partner"
              />
            </div>
            <p>
              Electronic claim submissions mean you get your money faster. Up
              until the second you are paid, Ability provides you with timely
              reports on the status of your transactions. Ability is
              industry-proven and serves thousands of doctors.
              <br />
              <button
                style={{
                  padding: "0.5rem 1.5rem",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  marginTop: "1rem",
                }}
              >
                Learn More
              </button>
            </p>
          </div>
          <div className="partner-page-container2111">
            <div>
              <img
                style={{
                  maxWidth: "190px",
                  maxHeight: "50px",
                  width: "auto",
                  height: "auto",
                  marginBottom: "1rem",
                }}
                src="/PartnersPage/change.png"
                alt="partner"
              />
            </div>
            <p>
              Change Healthcare helps healthcare providers get paid more quickly
              and accurately.Providers can check eligibility in real-time,
              submit and track claims, manage rejections and denials, and take
              patient payments in the office, online, or over the phone.
              <br />
              <button
                style={{
                  padding: "0.5rem 1.5rem",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  marginTop: "1rem",
                }}
              >
                Learn More
              </button>
            </p>
          </div>
          <div className="partner-page-container2111">
            <div>
              <img
                style={{
                  maxWidth: "190px",
                  maxHeight: "50px",
                  width: "auto",
                  height: "auto",
                  marginBottom: "1rem",
                }}
                src="/PartnersPage/etactics.png"
                alt="partner"
              />
            </div>
            <p>
              Smooth and responsive implementation at an affordable price is
              what you get from knowledgeable staff for ongoing support. We
              advocate for our customers to get paid promptly and accurately.
              <br />
              <button
                style={{
                  padding: "0.5rem 1.5rem",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  marginTop: "1rem",
                }}
              >
                Learn More
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
