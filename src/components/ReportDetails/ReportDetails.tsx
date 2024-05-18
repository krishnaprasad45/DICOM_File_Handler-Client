import { useLocation } from 'react-router-dom';
import './MedicalReport.css'; // Optional: to add custom styles
import MedicalDocument from '../../Interfaces/dicomInterface';

const MedicalReport = () => {
  const location = useLocation();
  const document: MedicalDocument = location.state?.data || {};

  return (
    <div className="medical-report">
      <h1>MEDICAL REPORT</h1>
      <div className="field">
        <strong>Patient Name:</strong> {document.patientName}
      </div>
      <div className="field">
        <strong>Patient ID:</strong> {document.patientID}
      </div>
      <div className="field">
        <strong>Date of Birth:</strong> {document.patientDOB}
      </div>
      <div className="field">
        <strong>Gender:</strong> {document.patientGender}
      </div>
      <div className="field">
        <strong>Study ID:</strong> {document.studyID}
      </div>
      <div className="field">
        <strong>Study Description:</strong> {document.studyDescription}
      </div>
      <div className="field">
        <strong>Study Date:</strong> {document.studyDate}
      </div>
      <div className="field">
        <strong>Modality:</strong> {document.modality}
      </div>
      <div className="field">
        <strong>Pixel Spacing:</strong> {document.pixelSpacing}
      </div>
      <div className="field">
        <strong>Image Type:</strong> {document.imageType}
      </div>
      <div className="field">
        <strong>Docim Type:</strong> {document.docimType}
      </div>
      <div className="field">
        <strong>Instance UID:</strong> {document.instanceUID}
      </div>
      <div className="field">
        <strong>Accession Number:</strong> {document.accessionNumber}
      </div>
      <div className="field">
        <strong>Doctor Name:</strong> {document.doctorName}
      </div>
      <div className="field">
        <strong>Physician:</strong> {document.physician}
      </div>
      <div className="field">
        <strong>Study Reason:</strong> {document.studyReason}
      </div>
      <div className="field">
        <strong>Study Institution:</strong> {document.studyInstitution}
      </div>
      <div className="field">
        <strong>Reviewed Institution:</strong> {document.reviewedInstitution}
      </div>
      <div className="field">
        <strong>Institution Location:</strong> {document.institutionLocation}
      </div>
      <div className="field">
        <strong>Body Part:</strong> {document.bodyPart}
      </div>
      <div className="field">
        <strong>Acquisition Technique:</strong> {document.acquisitionTechnique}
      </div>
      <div className="field">
        <strong>Image Procedure:</strong> {document.imgProcedure}
      </div>
      {document.createdAt && (
        <div className="field">
          <strong>Created At:</strong> {new Date(document.createdAt).toDateString()}
        </div>
      )}
    </div>
  );
};

export default MedicalReport;
