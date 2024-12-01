function ExperienceForm({ experience, onExperienceChange }) {
  const handleJobChange = (index, field, value) => {
    const updatedExperience = experience.map((job, i) => {
      if (i == index) {
        return { ...job, [field]: value };
      }
      return job;
    });
    onExperienceChange(updatedExperience);
  };

  const addJob = () => {
    onExperienceChange([
      ...experience,
      {
        id: experience.length + 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeJob = (index) => {
    onExperienceChange(experience.filter((_, i) => i !== index));
  };

  return (
    <form className="form-section">
      <h3>Work Experience</h3>

      {experience.map((job, index) => (
        <div key={job.id} className="job-entry">
          <div className="form-group">
            <label>
              Company
              <input
                type="text"
                value={job.company}
                onChange={(e) =>
                  handleJobChange(index, "company", e.target.value)
                }
                placeholder="Enter company name"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Position
              <input
                type="text"
                value={job.position}
                onChange={(e) =>
                  handleJobChange(index, "position", e.target.value)
                }
                placeholder="Enter job title"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Start Date
              <input
                type="text"
                value={job.startDate}
                onChange={(e) =>
                  handleJobChange(index, "startDate", e.target.value)
                }
                placeholder="MM/YYYY"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              End Date
              <input
                type="text"
                value={job.endDate}
                onChange={(e) =>
                  handleJobChange(index, "endDate", e.target.value)
                }
                placeholder="MM/YYYY or Present"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Description
              <textarea
                value={job.description}
                onChange={(e) =>
                  handleJobChange(index, "description", e.target.value)
                }
                placeholder="Describe your key responsibilities and achievements"
              />
            </label>
          </div>

          {experience.length > 1 && (
            <button type="button" onClick={() => removeJob(index)}>
              Remove Job
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={addJob}>
        Add Another Job
      </button>
    </form>
  );
}

export default ExperienceForm;
