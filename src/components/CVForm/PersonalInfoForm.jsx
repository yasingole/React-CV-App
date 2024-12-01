function PersonalInfoForm({personalInfo, onPersonalInfoChange}) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onPersonalInfoChange({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <form className="form-section">
      <h3>Personal Details</h3>

      <div className="form-group">
        <label className="required">
          Full Name
          <input
            type="text"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </label>
      </div>

      <div className="form-group">
        <label className="required">
          Email
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
      </div>

      <div className="form-group">
        <label className="required">
          Phone Number
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </label>
      </div>

      <div className="form-group">
        <label className="required">
          City
          <input
            type="text"
            name="city"
            value={personalInfo.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </label>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
