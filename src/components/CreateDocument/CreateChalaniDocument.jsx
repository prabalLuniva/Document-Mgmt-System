import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { jsPDF } from "jspdf";
import NavBar from "../Navbar/Navbar";
import { useNavigate } from "react-router";
import { Button } from "antd";

function CreateChalani() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState(
    "<h2>Dear Manager,</h2><h2>Subject:</h2><h3>I am writing to request a [duration of leave] leave of absence from [start date] to [end date]. The reason for my request is [provide reason for leave, such as personal or medical reasons].I have already discussed my absence with colleague or managers name and they have agreed to take on my responsibilities during this time. I will ensure that all of my work is up to date before I leave and that any outstanding tasks are passed on to [colleague or managers name.Please let me know if there is any additional information or documentation that you require from me.I appreciate your understanding and look forward to returning to work on [return date].Thank you for your attention to this matter..</h3><h2>Sincerely,</h2> <h2>[Your Name]</h2>"
  );
  const [attachment, setAttachment] = useState(null);
  const quillRef = useRef(null);
  const navigate = useNavigate();

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNav = () => {
    navigate("/uploaddocument");
  };
  const printBody = () => {
    const bodyContent = quillRef.current.getEditor().root.innerHTML;

    // create a new window to display the print content
    const printWindow = window.open("", "Print", "height=600,width=800");
  
    // add the body content to the new window
    printWindow.document.write(`<html><head><title>Print</title></head><body>${bodyContent}</body></html>`);
  
    // print and close the new window
    printWindow.print();
    printWindow.close();
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(subject, 10, 10);
    const bodyText = document.getElementById("body").innerText;
    doc.text(bodyText, 5, 5);
    doc.save("Doc.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("body", body);
    formData.append("attachment", attachment);

    try {
      const response = await axios.post("/api/leave-application", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <div>
          <ReactQuill
            id="body"
            value={body}
            onChange={handleBodyChange}
            ref={quillRef}
          />
        </div>
        <button style={{ margin: "10px" }} onClick={handleNav} type="submit">
          Upload Document
        </button>
      </form>
      <div style={{ display: "flex", margin: "10px" }}>
        {/* <button type='primary' style={{ margin:'10px'}} onClick={handlePrint}>Print</button>
      <button style={{ margin:'10px'}} onClick={handleDownload}>Download</button>
      <button style={{ margin:'10px'}} onClick={printBody}>Print Body</button> */}
        <Button type="primary" onClick={handlePrint} style={{ margin: "13px" }}>
          Print
        </Button>
        <Button
          type="primary"
          onClick={handleDownload}
          style={{ margin: "13px" }}
        >
          Download
        </Button>
        <Button type="primary" onClick={printBody} style={{ margin: "13px" }}>
          Print Body
        </Button>
      </div>
    </>
  );
}

export default CreateChalani;
