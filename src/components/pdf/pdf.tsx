import React from "react";
import { useLocation } from "react-router-dom";

const PDFViewer = React.memo(() => {
  const location = useLocation();
  const pdfUrl = location.state?.data;

  const iframeStyle = {
    width: "100%",
    height: "100vh", 
    border: "none", 
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe src={pdfUrl} style={iframeStyle} title="PDF Viewer"></iframe>
    </div>
  );
});

export default PDFViewer;
