import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  rememberMe: false, 
};

const Registration = () => {
  const [isSuccess, setIsSuccess] = useState(false); 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        localStorage.setItem("user", JSON.stringify(values)); 
        action.resetForm();
        setIsSuccess(true); 

       
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">REGISTRATION FORM</p>

               
                {isSuccess && (
                  <div className="success-message">
                    <p>Registration Successful!</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>

                 
                  <div className="remember-me">
                    <label className="remember-me-label">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={values.rememberMe}
                        onChange={handleChange}
                      />
                      Remember Me
                    </label>
                  </div>

                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Register
                    </button>
                  </div>
                </form>

                <div className="sign-up">
                  <span>Already have an account? </span>
                  <Link to="/SignUp">Sign In now</Link>
                </div>
              </div>

              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    background: #fff;
  }

  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }

  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }

  .modal-desc {
    margin: 6px 0 30px 0;
  }

  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    overflow: hidden;
  }

  .modal-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
  }

  .input-button:hover {
    background: #55311c;
  }

  .remember-me {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .remember-me-label {
    font-size: 14px;
    color: #8c7569;
    display: flex;
    align-items: center;
  }

  .sign-up {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .sign-up a {
    color: #8c7569;
    margin-left: 5px;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }

  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block:focus-within {
    border-color: #8c7569;
  }

  /* Success Popup Styles */
  .success-message {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Registration;
