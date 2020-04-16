import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import { SignInContainer, ButtonsContainer } from "./sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton
              type="button"
              onClick={() => googleSignInStart()}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
