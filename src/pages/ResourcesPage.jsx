import { useNavigate } from "react-router-dom";
import "./css/ResourcesPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ResourcesPage = () => {
  const navigate = useNavigate();
  const [CategoryData, setCategoryData] = useState([]);
  const [blogNotes, setBlogNotes] = useState("");
  const [mainBlog, setMainBlog] = useState("");
  const [ebook, setEbook] = useState([]);
  const [popular, setPopular] = useState([]);
  const [showData, setShowData] = useState(false);

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}BlogCategory/getBlogCategory`);
      setCategoryData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBlogNotes = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Blog/getBlogNotes`);
      setBlogNotes(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMainNotes = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Blog/getBlogMain`);
      setMainBlog(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEbook = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Ebook/getEbook`);
      setEbook(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPopulerData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Blog/getBlogPopular`);
      setPopular(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryData();
    getBlogNotes();
    getMainNotes();
    getEbook();
    getPopulerData();
  }, []);

  const onDownload = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "invoice.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>Resources</p>
      </div>
      <div className="partner-page-container2">
        <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Sample{" "}
          <span style={{ fontSize: "1.8rem", fontWeight: "900" }}>Notes</span>{" "}
        </p>

        <div className="partner-page-container21">
          <div className="partner-page-container2111">
            <div>
              <img
                style={{
                  maxWidth: "190px",
                  maxHeight: "250px",
                  width: "auto",
                  height: "auto",
                  marginBottom: "1rem",
                }}
                src={blogNotes?.image}
                alt="partner"
              />
            </div>
            <p style={{ fontSize: ".8rem", lineHeight: "1rem  " }}>
              <p
                style={{
                  color: "#32373A",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {blogNotes?.title}
              </p>{" "}
              <br />
              {blogNotes?.description}
              <br />
            </p>
          </div>
        </div>
        <div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                borderTop: "1px solid #CCCCCC",
                paddingTop: "1.5rem",
              }}
            >
              {mainBlog?.title}
            </p>
            <div className="resources-page-container2111">
              <div className="resources-page-container21111">
                <p>{mainBlog?.description}</p>
                <p>
                  <button
                    onClick={() =>
                      navigate(`/resources/blogDescription/all_Blog`)
                    }
                    style={{
                      backgroundColor: "#1C5877",
                      color: "white",
                      fontSize: ".8rem",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      padding: "0.5rem 1.5rem",
                    }}
                  >
                    EXPLORE THE OASISNOTES BLOG
                  </button>
                </p>
              </div>
              {/* Explore */}

              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    color: "#32373A",
                    marginTop: "1.6rem",
                  }}
                >
                  Browse by Category
                </p>
                <div className="resources-page-container211111">
                  {CategoryData?.map((item, i) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".2rem",
                        alignItems: "center",
                        marginBottom: "2rem",
                      }}
                      key={i}
                    >
                      <img
                        src={item?.image}
                        style={{
                          maxWidth: "200px",
                          maxHeight: "200px",
                          width: "auto",
                          height: "auto",
                        }}
                        alt="image-1"
                      />
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "1rem",
                          color: "#32373A",
                        }}
                      >
                        {item?.title}
                      </p>
                      <button
                        style={{
                          backgroundColor: "#1C5877",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          fontWeight: "bold",
                          padding: "0.5rem 1.5rem",
                        }}
                        onClick={() => navigate(`/resources/blog/${item?._id}`)}
                      >
                        VIEW POSTS
                      </button>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    Explore Popular Posts
                  </p>
                  <div className="resources-page-container-rk">
                    {popular?.map((item, i) => (
                      <div key={i}>
                        <img
                          src={item?.image}
                          alt="image3"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "1rem",
                            color: "#32373A",
                          }}
                        >
                          {showData
                            ? item?.description
                            : item?.description.slice(0, 100)}{" "}
                          ...
                        </p>
                        <button
                          style={{
                            backgroundColor: "#1C5877",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            padding: "0.5rem 1.5rem",
                          }}
                          onClick={() => setShowData(!showData)}
                        >
                          READ MORE
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    color: "#32373A",
                    marginTop: "1.6rem",
                    borderTop: "1px solid #CCCCCC",
                    paddingTop: "1rem",
                  }}
                >
                  eBooks
                </p>
                <div
                  style={{
                    marginBottom: "3rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #CCCCCC",
                  }}
                  className="resources-page-container211111"
                >
                  {ebook?.map((item, i) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".2rem",
                        alignItems: "center",
                        marginBottom: "2rem",
                      }}
                      key={i}
                    >
                      <img
                        src={item?.image}
                        style={{
                          maxWidth: "240px",
                          maxHeight: "240px",
                          width: "auto",
                          height: "auto",
                        }}
                        alt="image-1"
                      />
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "1rem",
                          color: "#32373A",
                        }}
                      >
                        {item?.title}
                      </p>
                      <button
                        style={{
                          backgroundColor: "#1C5877",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          fontWeight: "bold",
                          padding: "0.5rem 1.5rem",
                        }}
                        onClick={() => onDownload(item?.link)}
                      >
                        DOWNLOAD NOW
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
