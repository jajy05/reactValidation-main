import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";  
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { loginSchema } from "./schemas";

const SignUp = () => {
  const [loginSuccess, setLoginSuccess] = useState(false); 
  const navigate = useNavigate(); 
 
  const validateLogin = (email, password) => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    
    return email === storedEmail && password === storedPassword;
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      
      console.log("Submitted values", values);

      
      if (validateLogin(values.email, values.password)) {
        setLoginSuccess(true); 
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000); 
      } else {
        setLoginSuccess(false); 
        alert("Invalid credentials!"); 
      }

      action.resetForm(); 
    },
  });

  useEffect(() => {
    
    if (!localStorage.getItem("userEmail") || !localStorage.getItem("userPassword")) {
      storeUserData("test@example.com", "password123");
    }
  }, []);

 
  const storeUserData = (email, password) => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">LOGIN PAGE</p>

                {loginSuccess && (
                  <p className="login-success">Login Successful!</p> 
                )}

                <form onSubmit={handleSubmit}>
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

                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      LOGIN
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  NEW USER!!! <Link to="/">Register Now</Link>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt="Login"
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
  }

  .modal-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .login-success {
    font-size: 1.5rem;
    color: green;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
  }

  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }

  .sign-up a {
    color: #8c7569;
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
    font-family: "Nunito", sans-serif;
  }

  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
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

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default SignUp;
