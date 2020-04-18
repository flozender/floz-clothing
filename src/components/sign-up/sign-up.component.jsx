import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import { SignUpContainer } from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign Up with email/password</span>

      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
