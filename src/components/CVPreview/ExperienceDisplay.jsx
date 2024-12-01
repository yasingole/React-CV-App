import "../../styles/ExperienceDisplay.css" 

function ExperienceDisplay({ experience }) {
    return (
        <div className="preview-section">
            <h3>Professional Experience</h3>  
            <div className="preview-content">
                {experience.map((job) => (
                    <div key={job.id} className="job-entry">
                        <h4>{job.position}, {job.company}</h4>  
                        <p className="job-duration">
                            {job.startDate} – {job.endDate}  
                        </p>
                        <p className="job-description">
                            {job.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceDisplay