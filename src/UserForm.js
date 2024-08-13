import React, { useState } from 'react';
import './UserForm.scss';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profile: null,
    mobileNumber: '',
    jobTitle: '',
    dateOfBirth: '',
    emailId: '',
    address: '',
    education: '',
  });

  const [storedData, setStoredData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoredData(formData);
    setIsFormVisible(false);
  };

  const handleAddClick = () => {
    setIsFormVisible(true);
  };

  const handleEditClick = () => {
    setIsFormVisible(true);
  };

  const handleCancelClick = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="form-container">
      {!isFormVisible && !storedData && (
        <button className="add-btn" onClick={handleAddClick}>
          Add
        </button>
      )}

      {storedData && !isFormVisible && (
        <div className="stored-data">
          <p><strong>First Name:</strong> {storedData.firstName}</p>
          <p><strong>Last Name:</strong> {storedData.lastName}</p>
          <p><strong>Mobile Number:</strong> {storedData.mobileNumber}</p>
          <p><strong>Job Title:</strong> {storedData.jobTitle}</p>
          <p><strong>Date Of Birth:</strong> {storedData.dateOfBirth}</p>
          <p><strong>Email Id:</strong> {storedData.emailId}</p>
          <p><strong>Address:</strong> {storedData.address}</p>
          <p><strong>Education:</strong> {storedData.education}</p>
          <button className="edit-btn" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}

      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Profile</label>
              <input
                type="file"
                name="profile"
                onChange={handleChange}
                accept="image/*"
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Id</label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Education</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel-btn" onClick={handleCancelClick}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserForm;
