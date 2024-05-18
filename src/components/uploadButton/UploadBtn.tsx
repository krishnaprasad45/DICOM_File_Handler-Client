import React, { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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
  fontSize: "1.6rem",
  padding: "20px 25px",
  borderRadius: "20px",
  backgroundColor: "#4CAF50",
  color: "white",
  "&:hover": {
    backgroundColor: "#45a049",
  },
});

interface UploadBtnProps {}

const UploadBtn: React.FC<UploadBtnProps> = React.memo(() => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      setSelectedFile(file);

      const formData = new FormData();
      formData.append("file", file);
      const userEmail = localStorage.getItem("userEmail") || "";
      formData.append("userEmail", userEmail);

      try {
        const response = await userAxios.post("/uploadfile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        });

        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(pdfBlob);

        navigate("/pdf-viewer", { state: { data: url } });
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    },
    [navigate]
  );

  const uploadButton = useMemo(
    () => (
      <StyledButton
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon style={{ fontSize: 48 }} />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </StyledButton>
    ),
    [handleFileChange]
  );

  return (
    <div>
      {uploadButton}
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
});

export default UploadBtn;
