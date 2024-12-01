function SkillsForm({skills, onSkillsChange}) {
    
    const handleSkillsAdd= (e) => {
        if (e.key === "Enter" && e.target.value.trim()) {
            e.preventDefault();
            onSkillsChange([...skills, e.target.value.trim()]);
            e.target.value= "";
        }
    };
    
    const handleSkillsRemove= (skillToRemove) => {
        const updatedSkills= skills.filter(skill => skill !== skillToRemove);
        onSkillsChange(updatedSkills);
    };
    
    return (
        <form className="form-section">
            <h3>Skills</h3>
            <div className="form-group">
                <label>
                    Add Skill
                    <input 
                        type="text"
                        placeholder="Type a skill and press Enter"
                        onKeyDown={handleSkillsAdd}
                    />
                </label>

                <div className="skills-list">
                    {skills.map( (skill, index) => (
                        <div key={index} className="skill-item">
                            {skill}
                            <button
                                type="button"
                                onClick={() => handleSkillsRemove(skill)}
                                >
                                    ×
                                </button>
                        </div>
                    ))}
                </div>
            </div>
        </form>
    )
}

export default SkillsForm;