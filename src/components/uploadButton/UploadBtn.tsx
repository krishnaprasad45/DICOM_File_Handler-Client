import * as React from "react";
import { useState } from "react"; // Import useState
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
  fontSize: "1.2rem", // Increase font size
  padding: "12px 24px", // Increase padding for a bigger button
  borderRadius: "10px", // Add border radius for a more stylish look
  backgroundColor: "#4CAF50", // Change background color
  color: "white", // Change text color to contrast with background
  "&:hover": {
    backgroundColor: "#45a049", // Darker shade on hover
  },
});

export default function UploadBtn() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0]; // Get the selected file
    setSelectedFile(file);
  
    if (file) {
      const formData = new FormData();
      formData.append("file", file); // Append the selected file to form data
  
      try {
        const response = await userAxios.post("/uploadfile", formData,{
          headers: {
              "Content-Type": "multipart/form-data", // Set multipart/form-data for file upload
          }});
        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  console.log(200);
  console.log("file", selectedFile);
  return (
    <div>
      <StyledButton
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />{" "}
        {/* Attach onChange event handler */}
      </StyledButton>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}{" "}
      {/* Display the selected file name */}
    </div>
  );
}
