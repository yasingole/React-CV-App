import React from "react";

function EducationForm({ educationInfo, onEducationInfoChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("education.")) {
      const field = name.split(".")[1];
      onEducationInfoChange({
        ...educationInfo,
        education: {
          ...educationInfo.education,
          [field]: value,
        },
      });
    } else if (name.startsWith("certificates.")) {
      const field = name.split(".")[1];
      onEducationInfoChange({
        ...educationInfo,
        certificates: {
          ...educationInfo.certificates,
          [field]: value,
        },
      });
    }
  };

  return (
    <form className="form-section">
      <h3>Education</h3>

      <div className="form--group">
        <label>
          University
          <input
            type="text"
            name="education.university"
            value={educationInfo.education.university}
            onChange={handleChange}
            placeholder="Enter your univeristy name"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Date
          <input
            type="text"
            name="education.date"
            value={educationInfo.education.date}
            onChange={handleChange}
            placeholder="Enter date"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Course
          <input
            type="text"
            name="education.course"
            value={educationInfo.education.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Grade
          <input
            type="text"
            name="education.grade"
            value={educationInfo.education.grade}
            onChange={handleChange}
            placeholder="Enter grade"
          />
        </label>
      </div>

      <h4>Certificates</h4>
      <div className="form-group">
        <label>
          Certificate Name
          <input
            type="text"
            name="certificates.name"
            value={educationInfo.certificates.name}
            onChange={handleChange}
            placeholder="Enter certificate name"
          />
        </label>
      </div>
    </form>
  );
}

export default EducationForm;
