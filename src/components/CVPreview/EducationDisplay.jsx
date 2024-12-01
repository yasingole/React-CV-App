import "../../styles/EducationDisplay.css"

function EducationDisplay({ educationInfo }) {
    return (
      <div className="preview-section">
        <h3>Education and Certificates</h3>
        <div className="preview-content">
          <div className="education-details">
            <h4>{educationInfo.education.university}, {educationInfo.education.course}, <em>({educationInfo.education.date})</em></h4>
            <p className="grade-info">
              Grade: {educationInfo.education.grade} 
            </p>
          </div>
  
          <div className="certificates">
            <p>{educationInfo.certificates.name}</p>
          </div>
        </div>
      </div>
    );
}

export default EducationDisplay;