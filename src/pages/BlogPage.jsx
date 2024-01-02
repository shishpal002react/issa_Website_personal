import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/BlogPage.css";
import { Form } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const BlogPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p style={{ fontSize: "2.8rem", fontWeight: "900" }}>Our Blog</p>
      </div>
      <div className="blog-page-container-rk">
        <div className="blog-page-container1">
          <div className="blog-page-container112">
            <div className="blog-page-container11">
              <img src="/Blog/pic.png" alt="Blog" />
              <p
                style={{
                  fontWeight: "900",
                  fontSize: "1.5rem",
                  color: "#254C69",
                }}
              >
                Using Genetic Testing to Enhance Psychiatric Medication
                Selection
              </p>
              <p
                style={{
                  fontSize: ".8rem",
                  lineHeight: "1rem",
                  color: "#545454",
                }}
              >
                September 15, 2023 |{" "}
                <span style={{ color: "#1A9FB2" }}>0 Comments</span>
              </p>
              <p>
                Using Genetic Testing to Enhance Psychiatric Medication
                Selection Finding the optimal medication regimen for each
                patient often involves trial and error. However, recent strides
                in...
              </p>
              <p
                onClick={() => navigate("/resources/blog/1")}
                style={{
                  color: "#1A9FB2",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Read More
              </p>
            </div>
            <div className="blog-page-container11">
              <img src="/Blog/pic.png" alt="Blog" />
              <p
                style={{
                  fontWeight: "900",
                  fontSize: "1.5rem",
                  color: "#254C69",
                }}
              >
                Using Genetic Testing to Enhance Psychiatric Medication
                Selection
              </p>
              <p
                style={{
                  fontSize: ".8rem",
                  lineHeight: "1rem",
                  color: "#545454",
                }}
              >
                September 15, 2023 |{" "}
                <span style={{ color: "#1A9FB2" }}>0 Comments</span>
              </p>
              <p>
                Using Genetic Testing to Enhance Psychiatric Medication
                Selection Finding the optimal medication regimen for each
                patient often involves trial and error. However, recent strides
                in...
              </p>
              <p style={{ color: "#1A9FB2", fontWeight: "bold" }}>Read More</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Stack spacing={2}>
                {/* <Typography>Page: {page}</Typography> */}
                <Pagination count={10} page={page} onChange={handleChange} />
              </Stack>
            </div>
          </div>
          <div>
            <p>
              To get our monthly newsletter,share your email address Thanks, and
              welcome!
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <p>
              <span style={{ color: "red", marginTop: "1rem" }}>*</span> =
              required field
            </p>
            <button
              type="submit"
              style={{
                backgroundColor: "#B8BCC2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
              }}
              className="blog-page-button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
