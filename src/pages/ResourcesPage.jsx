import { useNavigate } from "react-router-dom";
import "./css/ResourcesPage.css";

const ResourcesPage = () => {
  const navigate = useNavigate();
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
                src={"/ResourcesPage/Picture1.png"}
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
                View Sample Notes Created Using OasisNotes
              </p>{" "}
              <br />
              Waystar simplifies and unifies the healthcare revenue cycle with
              innovative technology thatallows clients to collect more with less
              cost and less stress, so they can focus on their goals,patients,
              and communities.
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
              Blog
            </p>
            <div className="resources-page-container2111">
              <div className="resources-page-container21111">
                <p>
                  Explore comprehensive blog posts on a variety of topics
                  written by our experts.From note writing tips to tips for
                  clinicians, we have all the resources you need to grow your
                  practice and expand your industry knowledge.
                </p>
                <p>
                  <button onClick={() => navigate("/resources/blog")}
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Note Waiting Tips
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
                    >
                      VIEW POSTS
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Note Waiting Tips
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
                    >
                      VIEW POSTS
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Note Waiting Tips
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
                    >
                      VIEW POSTS
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Note Waiting Tips
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
                    >
                      VIEW POSTS
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Note Waiting Tips
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
                    >
                      VIEW POSTS
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Note Waiting Tips
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
                    >
                      VIEW POSTS
                    </button>
                  </div>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    Explore Popular Posts
                  </p>
                  <div className="resources-page-container-rk">
                    <div>
                      <img
                        src="/ResourcesPage/pic3.png"
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
                        Guide to Creating Mental Health Treatment Plans
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
                      >
                        READ MORE
                      </button>
                    </div>
                    <div>
                      <img
                        src="/ResourcesPage/pic3.png"
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
                        Guide to Creating Mental Health Treatment Plans
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
                      >
                        READ MORE
                      </button>
                    </div>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Going Virtual: How to Start a Virtual Practice
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
                    >
                      DOWNLOAD NOW
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Going Virtual: How to Start a Virtual Practice
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
                    >
                      DOWNLOAD NOW
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".2rem",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      src="/ResourcesPage/pic2.png"
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
                      Going Virtual: How to Start a Virtual Practice
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
                    >
                      DOWNLOAD NOW
                    </button>
                  </div>
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
