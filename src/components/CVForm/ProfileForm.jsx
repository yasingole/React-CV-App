function ProfileForm({ profileText, onProfileTextChange }) {
  
  const handleChange = (e) => {
    onProfileTextChange(e.target.value);
  };

  return (
    <form className="form-section">
      <h3>Professional Profile</h3>
      <div className="form-group">
        <label>
          Professional Summary
          <textarea
            value={profileText}
            onChange={handleChange}
            placeholder="Write a brief professional summary about yourself"
          />
          <span className="helper-text">
            Write a compelling summary of your professional background and goals
          </span>
        </label>
      </div>
      <pre>{JSON.stringify(profileText, null, 2)}</pre>
    </form>
  );
}

export default ProfileForm;
