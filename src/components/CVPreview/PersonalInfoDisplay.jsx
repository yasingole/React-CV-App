import "../../styles/PersonalInfoDisplay.css"
function PersonalInfoDisplay({personalInfo}) {
    return (
        <header className="cv-header">
            <div className="full-name">
                <h1>{personalInfo.fullName}</h1>
            </div>
            <div className="contact-info">
                <span className="contact-item">
                    <i className="far fa-envelope"></i> 
                    {personalInfo.email}
                </span>
                <span className="contact-item">
                    <i className="fas fa-phone"></i>
                    {personalInfo.phone}
                </span>
                <span className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    {personalInfo.city}
                </span>
            </div>
        </header>
    );
}

export default PersonalInfoDisplay