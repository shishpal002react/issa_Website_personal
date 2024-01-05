import { useNavigate } from "react-router-dom";
import "./css/SingleBlogPage.css";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogDescription = () => {
  const navigate = useNavigate();
  const [mainBlog, setMainBlog] = useState("");

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const getMainNotes = async () => {
    try {
      const res = await axios.get(`${BaseUrl}Blog/getBlogMain`);
      setMainBlog(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMainNotes();
  }, []);
  return (
    <div>
      <div className="Single-blog-page-container">
        <div className="Single-blog-page-container-rk">
          {/* <img src="/Blog/pic.png" alt="Blog" /> */}
          <p
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {mainBlog?.title}
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1rem", color: "#545454" }}>
            {mainBlog?.description}
          </p>
        </div>
        {/* <div style={{ marginBottom: "2rem" }}>
          <p>Start Your free Trial Today</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*First</Form.Label>
            <Form.Control className="border border-dark" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Last</Form.Label>
            <Form.Control className="border border-dark" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Email</Form.Label>
            <Form.Control className="border border-dark" type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Phone</Form.Label>
            <Form.Control className="border border-dark" type="number" />
          </Form.Group>
          <Form.Group
            style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
            className="mb-3 "
            controlId="formBasicEmail"
          >
            <Form.Check />{" "}
            <Form.Label>
              By checking this box you agree to
              <span style={{ color: "#0000EE" }}>
                {" "}
                ICANotes Terms of Service, Privacy Policy
              </span>
              and
              <span style={{ color: "#0000EE" }}>
                {" "}
                Business Associate Agreement
              </span>
            </Form.Label>
          </Form.Group>

          <button
            type="submit"
            style={{
              backgroundColor: "#B8BCC2",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              padding: "0.5rem 1.5rem",
              width: "100%",
            }}
            className="blog-page-button"
          >
            Signup
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BlogDescription;
