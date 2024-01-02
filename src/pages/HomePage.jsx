import { useEffect, useState } from "react";
import "./css/HomePage.css";
import axios from "axios";

export const HomePage = () => {
  const [topBanner, setTopBanner] = useState("");
  const [bottomBanner, setBottomBanner] = useState("");
  const [about, setAbout] = useState("");
  const [choosePharma, setChoosePharma] = useState("");
  const [trustedImage, setTrustedImage] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getTopBanner = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Banner/getTopBanner`);
      setTopBanner(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ButtomTopBanner = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Banner/getBottomBanner`);
      setBottomBanner(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const aboutUs = async () => {
    try {
      const res = await axios.get(`${BaseUrl}AboutUs/getAboutUs`);
      setAbout(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const choosePharmaData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}WhyChoosePharm/getWhyChoosePharm`);
      setChoosePharma(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const trustedImageData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}TrustedClient/addTrustedClient`);
      setTrustedImage(res?.data?.data);
      console.log(res?.data?.data, "good product");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopBanner();
    ButtomTopBanner();
    aboutUs();
    choosePharmaData();
    trustedImageData();
  }, []);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${topBanner?.image})` }}
        className="top-section-homePage"
      >
        <div className="text-container">
          <p style={{ fontSize: "1.2rem", fontWeight: "100" }}>
            {topBanner?.heading}
          </p>
          <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>
            {topBanner?.title}
            {/* Makes Your Health <br /> Better Will Makes Us <br /> Better */}
          </p>
          <p style={{ fontSize: ".9rem", fontWeight: "100" }}>
            {topBanner?.description}
            {/* Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily. */}
          </p>
          <button
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "#024064",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: "100",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          width: "80%",
          margin: "auto",
          marginTop: "4.2rem",
        }}
      >
        Behavioral Health Software{" "}
        <span style={{ fontWeight: "bold", color: "#020000" }}>
          Trusted by Clinicians Nationwide
        </span>
      </p>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "3rem",

          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "1rem",
          columnGap: ".3rem",
        }}
      >
        <div>
          <img
            style={{ width: "250px", height: "180px" }}
            src={trustedImage?.image}
            alt="image2"
          />
          <p>{trustedImage?._id}</p>
        </div>
      </div>

      <div className="features-container-homepage1">
        <div>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          >
            Our Features
          </p>
          <div className="features-container-homepage">
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Built.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Built-In CRM
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Organize and track inquires, referral sources, family members
                  with high visibility throughout the user interface.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Electric.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Electronic Health Record
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Comprehensive EHR tailored for Behavioral Health with a focus
                  on flexibility and efficiency.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/No.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  No Implementation Fees
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Unlimited training and support, unlimited data, month-to-month
                  contract with no set-up fees!
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Outcome.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  OutcomeTools
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Track outcome measures with ease by automating the exchange
                  between your organization and the people you serve.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Patient.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Patient Portal
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Safely and securely share patient health information while
                  automating the admissions process.{" "}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/calender.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Patient Calendar
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Automatically include notes and billing codes for each
                  appointment. Easily track cancellations and no-shows.{" "}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Telehealth.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Telehealth
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Reliable, HIPAA compliant and fully integrated with BestNotes.
                  Great for individual or group therapy.{" "}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Management.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Medication Management
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Electronic Medication Administration Record (eMAR) and
                  e-prescribing including controlled substances.{" "}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Figure .png.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Human Resources
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Track employee files, emergency contacts, CEU’s and receive
                  employment applications from your website.{" "}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/clilnical.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Clinical Content
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Dedicated clinical team to keep your content up to date with
                  CARF, Joint Commission Payor standards.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Billing.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Billing
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Authorization Tracking, Claim Builder and 3rd-party biller
                  support{" "}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", margin: ".2rem" }}>
              <img
                style={{ maxWidth: "45px", maxHeight: "45px" }}
                src="/HomePage/Feactures/Report.png"
                alt="built"
              />
              <div>
                <p
                  style={{
                    color: "#1C5877",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                  }}
                >
                  Reports
                </p>
                <p style={{ color: "#3D3D3D" }}>
                  Powerful report builder backed with 75+ pre-built reports{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <p style={{ fontSize: ".8rem", textAlign: "center", color: "black" }}>
          Services
        </p> */}
        {/* <p
          style={{
            textAlign: "center",
            width: "40%",
            margin: "auto",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Feel Like Home With Best Medical Care
        </p> */}
        {/* Containeer-images */}
        {/* <div className="image-container-homePage1">
          <div style={{ padding: "1rem" }}>
            <img
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
                marginBottom: "1rem",
              }}
              src="/HomePage/category/1.png"
              alt="images"
            />
            <p style={{ fontWeight: "bold", lineHeight: ".5rem" }}>
              Angioplasty
            </p>
            <p style={{ width: "90%", fontSize: ".7rem" }}>
              Our team of highl professionals uses the latest heal echnologies
              health quickly and easily.
            </p>
          </div>
          <div style={{ padding: "1rem" }}>
            <img
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
                marginBottom: "1rem",
              }}
              src="/HomePage/category/1.png"
              alt="images"
            />
            <p style={{ fontWeight: "bold", lineHeight: ".5rem" }}>
              Angioplasty
            </p>
            <p style={{ width: "90%", fontSize: ".7rem" }}>
              Our team of highl professionals uses the latest heal echnologies
              health quickly and easily.
            </p>
          </div>
          <div>
            <img
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
                marginBottom: "1rem",
              }}
              src="/HomePage/category/1.png"
              alt="images"
            />
            <p style={{ fontWeight: "bold", lineHeight: ".5rem" }}>
              Angioplasty
            </p>
            <p style={{ width: "90%", fontSize: ".7rem" }}>
              Our team of highl professionals uses the latest heal echnologies
              health quickly and easily.
            </p>
          </div>
          <div>
            <img
              style={{
                // maxWidth: "480px",
                // maxHeight: "150px",
                width: "100%",
                height: "100%",
                marginBottom: "1rem",
              }}
              src="https://imgk.timesnownews.com/story/dentist.gif"
              alt="images"
            />
          </div>
        </div> */}
        {/* <div
          style={{ marginBottom: "5rem" }}
          className="image-container-homePage1"
        >
          <div style={{ padding: "1rem" }}>
            <img
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
                marginBottom: "1rem",
              }}
              src="/HomePage/category/1.png"
              alt="images"
            />
            <p style={{ fontWeight: "bold", lineHeight: ".5rem" }}>
              Angioplasty
            </p>
            <p style={{ width: "90%", fontSize: ".7rem" }}>
              Our team of highl professionals uses the latest heal echnologies
              health quickly and easily.
            </p>
          </div>{" "}
          <div>
            <img
              style={{
                // maxWidth: "480px",
                // maxHeight: "150px",
                width: "100%",
                height: "100%",
                marginBottom: "1rem",
              }}
              src="https://imgk.timesnownews.com/story/dentist.gif"
              alt="images"
            />
          </div>
          <div style={{ padding: "1rem" }}>
            <img
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
                marginBottom: "1rem",
              }}
              src="/HomePage/category/1.png"
              alt="images"
            />
            <p style={{ fontWeight: "bold", lineHeight: ".5rem" }}>
              Angioplasty
            </p>
            <p style={{ width: "90%", fontSize: ".7rem" }}>
              Our team of highl professionals uses the latest heal echnologies
              health quickly and easily.
            </p>
          </div>
          <div>
            <img
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
                marginBottom: "1rem",
              }}
              src="/HomePage/category/1.png"
              alt="images"
            />
            <p style={{ fontWeight: "bold", lineHeight: ".5rem" }}>
              Angioplasty
            </p>
            <p style={{ width: "90%", fontSize: ".7rem" }}>
              Our team of highl professionals uses the latest heal echnologies
              health quickly and easily.
            </p>
          </div>
        </div> */}
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        {" "}
        <div
          className="top-section-homePage1"
          style={{ backgroundImage: `url(${about?.image})` }}
        >
          <div className="text-container1">
            <p style={{ fontSize: ".8rem", fontWeight: "400" }}>About Us</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {/* The Heart And Science Of Medicate Test */}
              {about?.tittle}
            </p>
            <p style={{ fontSize: ".9rem", fontWeight: "100" }}>
              {about?.description}
              {/* Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with
              information highway will close. */}
            </p>
            <div
              className="new-homepage-class"
              style={{
                borderRadius: "10px",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                fontSize: ".8rem",
              }}
            >
              {about?.info?.map((item) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                      gap: "1rem",
                    }}
                  >
                    <img
                      style={{
                        maxWidth: "40px",
                        maxHeight: "40px",
                        width: "auto",
                        height: "auto",
                        marginBottom: "1rem",
                        borderRadius: "50%",
                        border: "1px solid #1A9FB2",
                        padding: "5px",
                        alignItems: "center",
                      }}
                      src={item?.image}
                      alt="images"
                    />
                    <p style={{ fontWeight: "bold", color: "black" }}>
                      {item?.name}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <button
              style={{
                padding: "0.5rem 1.5rem",
                backgroundColor: "#024064",
                color: "white",
                border: "none",
              }}
            >
              More About Us
            </button>
          </div>
        </div>
        <div className="container6-homePage">
          {about?.cate?.map((item, i) => (
            <div key={i}>
              <img src={item?.image} alt="" />
              <p>{item?.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Speecial Care */}
      <div className="container7-homePage">
        <div>
          <p style={{ fontSize: "1rem" }}> {bottomBanner?.heading}</p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {bottomBanner?.title}
          </p>
          <p style={{ fontSize: ".7rem" }}>{bottomBanner?.description}</p>
          {bottomBanner?.descriptionArray?.map((item) => (
            <>
              <p>
                {" "}
                <img
                  style={{ width: "20px" }}
                  src="/HomePage/verify.png"
                  alt=""
                />{" "}
                {item?.description}
              </p>
            </>
          ))}

          <button
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "#1A9FB2",
              color: "white",
              border: "none",
            }}
          >
            Discover Now
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src={bottomBanner?.image}
            alt="doctor"
            style={{ width: "48%" }}
          />{" "}
          <img
            src={bottomBanner?.image}
            alt="doctor"
            style={{ width: "48%" }}
          />{" "}
        </div>
      </div>
      {/*  */}
      <div className="container8-homePage">
        <p style={{ color: "black", fontSize: ".9rem" }}>
          {choosePharma?.title}
        </p>
        <p style={{ fontWeight: "400", width: "70%", color: "black" }}>
          {choosePharma?.description}
        </p>
        <div
          style={{
            color: "#1A9FB2",
            fontWeight: "bold",
            lineHeight: ".5rem",
            paddingBottom: "2rem",
          }}
          className="content-wrapper"
        >
          {choosePharma?.dataArray?.map((item, i) => (
            <div className="item" key={i}>
              <img
                src="/HomePage/right.png"
                alt="right"
                style={{ width: "20px", height: "20px" }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  paddingTop: ".7rem",
                }}
              >
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "65%",
          margin: "auto",
          marginTop: "3rem",
          marginBottom: "4rem",
        }}
      >
        <div>
          <p style={{ fontWeight: "500" }}>News Update</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Latest Healthcare Articles
            </p>
            <p
              style={{
                color: "#1A9FB2",
                padding: ".5rem 1rem",
                border: "1px dotted #1A9FB2",
                fontWeight: "bold",
              }}
            >
              Read All News
            </p>
          </div>
        </div>
        <div className="content-homepage123">
          <div className="content-homepage12334">
            <div>
              <img
                style={{ maxWidth: "130px", width: "auto" }}
                src="/HomePage/bottom image.png"
                alt="image"
              />
            </div>
            <div>
              <p>18 August 2023</p>
              <p style={{ fontWeight: "bold" }}>
                Open letter to the residents of Ellsworth, Maine
              </p>
            </div>
          </div>
          <div className="content-homepage12334">
            <div>
              <img
                style={{ maxWidth: "130px", width: "auto" }}
                src="/HomePage/bottom image.png"
                alt="image"
              />
            </div>
            <div>
              <p>18 August 2023</p>
              <p style={{ fontWeight: "bold" }}>
                Open letter to the residents of Ellsworth, Maine
              </p>
            </div>
          </div>
          <div className="content-homepage12334">
            <div>
              <img
                style={{ maxWidth: "130px", width: "auto" }}
                src="/HomePage/bottom image.png"
                alt="image"
              />
            </div>
            <div>
              <p>18 August 2023</p>
              <p style={{ fontWeight: "bold" }}>
                Open letter to the residents of Ellsworth, Maine
              </p>
            </div>
          </div>
          <div className="content-homepage12334">
            <div>
              <img
                style={{ maxWidth: "130px", width: "auto" }}
                src="/HomePage/bottom image.png"
                alt="image"
              />
            </div>
            <div>
              <p>18 August 2023</p>
              <p style={{ fontWeight: "bold" }}>
                Open letter to the residents of Ellsworth, Maine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
