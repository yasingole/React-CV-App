import "../../styles/SkillsDisplay.css";

function SkillsDisplay({ skills }) {
  return (
    <div className="preview-section">
      <h3>Skills</h3>
      <div className="preview-content">
        <div className="skills-display">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsDisplay;
