import React, { useState } from "react";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Sending data:", formData);
      setIsSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username) {
      errors.username = "Username is required";
    }
    if (!/@/.test(data.email)) {
      errors.email = "Email must contain the '@' symbol";
    }
    if (!data.email) {
      errors.email = "Email is required";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div>
      <h3>Registration Form</h3>
      {isSubmitted ? (
        <div>
          <p>Registration successful!</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p id="submit">SUBMITTED</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default UserRegistration;
