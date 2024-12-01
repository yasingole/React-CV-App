import { useState } from "react";
import "./App.css";
import PersonalInfoForm from "./components/CVForm/PersonalInfoForm";
import PersonalInfoDisplay from "./components/CVPreview/PersonalInfoDisplay";
import ProfileForm from "./components/CVForm/ProfileForm";
import ProfileDisplay from "./components/CVPreview/ProfileDisplay";
import EducationForm from "./components/CVForm/EducationForm";
import EducationDisplay from "./components/CVPreview/EducationDisplay";
import SkillsForm from "./components/CVForm/SkillsForm";
import SkillsDisplay from "./components/CVPreview/SkillsDisplay";
import ExperienceForm from "./components/CVForm/ExperienceForm";
import ExperienceDisplay from "./components/CVPreview/ExperienceDisplay";
import "./styles/PreviewLayout.css"
import "./styles/FormStyles.css"

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const [profileText, setProfileText] = useState("");

  const [educationInfo, setEducationInfo] = useState({
    education: {
      university: "",
      date: "",
      course: "",
      grade: "",
    },
    certificates: {
      name: "",
    },
  });

  const [skills, setSkills] = useState([]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handlePersonalInfoChange = (newInfo) => {
    setPersonalInfo(newInfo);
  };

  const handleEducationInfoChange = (newInfo) => {
    setEducationInfo(newInfo);
  };

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
  };

  const handleProfileTextChange = (newText) => {
    setProfileText(newText);
  };

  const handleExperienceChange = (newExperience) => {
    setExperience(newExperience);
  };

  return (
    <div className="app">
      <div className="form-side">
        <PersonalInfoForm
          personalInfo={personalInfo}
          onPersonalInfoChange={handlePersonalInfoChange}
        />
        <ProfileForm
          profileText={profileText}
          onProfileTextChange={handleProfileTextChange}
        />
        <EducationForm
          educationInfo={educationInfo}
          onEducationInfoChange={handleEducationInfoChange}
        />
        <SkillsForm skills={skills} onSkillsChange={handleSkillsChange} />
        <ExperienceForm
          experience={experience}
          onExperienceChange={handleExperienceChange}
        />
      </div>

      <div className="preview-side">
        <div className="cv-preview">
          <PersonalInfoDisplay personalInfo={personalInfo} />
          <ProfileDisplay profileText={profileText} />
          <EducationDisplay educationInfo={educationInfo} />
          <SkillsDisplay skills={skills} />
          <ExperienceDisplay experience={experience} />
        </div>
      </div>
    </div>
  );
}

export default App;
