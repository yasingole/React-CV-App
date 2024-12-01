import "../../styles/ProfileDisplay.css"

function ProfileDisplay({ profileText }) {
  return (
      <div className="preview-section profile-section">
          <h3>Profile</h3> 
          <div className="preview-content">
              <p>{profileText}</p>
          </div>
      </div>
  );
}

export default ProfileDisplay;
