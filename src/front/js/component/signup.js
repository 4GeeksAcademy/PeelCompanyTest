import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCancelButton = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    // Llamar a la acción signup
    const success = await actions.signup(username, email, password);
    if (success) {
      navigate("/login");
    } else {
      setErrorMessage(store.errorMessage || "An error occurred during signup.");
    }
  };

  return (
    <div className="card d-flex justify-content-center my-5 p-5 mx-auto" style={{ maxWidth: '600px', width: '100%' }}>
      <form onSubmit={handleSubmit}>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="form-outline mb-4">
          <h1>Register</h1>
          <h3>It's easy and fast!</h3>
        </div>
        {/* Username input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerUsername">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="registerUsername"
            className="form-control"
            required
          />
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerEmail">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="registerEmail"
            className="form-control"
            required
          />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerPassword">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="registerPassword"
            className="form-control"
            required
          />
        </div>
        {/* Repeat Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerRepeatPassword">Repeat Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            required
          />
        </div>
        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="registerCheck"
            required
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>
        {/* Submit button */}
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-success btn-block mb-3">
            {store.loading ? "Signing up..." : "Sign up"}
          </button>
          <button type="button" className="btn btn-outline-danger" onClick={handleCancelButton}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

