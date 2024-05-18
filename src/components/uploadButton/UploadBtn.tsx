import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { userAxios } from "../../Constraints/axiosInterceptor";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledButton = styled(Button)({
  fontSize: "1.2rem",
  padding: "12px 24px",
  borderRadius: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  "&:hover": {
    backgroundColor: "#45a049",
  },
});

const UploadBtn: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if(file) setSelectedFile(file);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const userEmail = localStorage.getItem('userEmail') || '';

      formData.append("userEmail", userEmail);

      try {
        const response = await userAxios.post("/uploadfile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: 'blob',
        });

        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfUrl);
        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div>
      <StyledButton component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </StyledButton>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      {pdfUrl && <iframe src={pdfUrl} width="100%" height="400px" title="PDF Viewer"></iframe>}
    </div>
  );
};

export default UploadBtn;
