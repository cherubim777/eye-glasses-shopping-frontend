import React, { useState } from "react";
import UserInput from "./UserInput";
import { useNavigate } from "react-router-dom";

export default function PasswordReset() {
  const [formValues, setFormValues] = useState({
    username: "",
    code: "",
    password: "",
    resetStatus: "",
  });
  const navigate = useNavigate();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

 const handleResetSubmit = (event) => {
  event.preventDefault();
  initiatePasswordReset(formValues.username)
    .then((response) => {
    
      if(response.status === 200){
        setFormValues({
            ...formValues,
            resetStatus: 'Reset code sent',
          });
          alert('Reset code Sent')
      }
      else {
        alert("Something went wrong")
      }
    
    })
    .catch((error) => {
      setFormValues({
        ...formValues,
        resetStatus: `Error resetting password: ${error.message}`,
      })
    })
}
  const handleNewPasswordSubmit = (event) => {
    event.preventDefault();
    resetPassword(formValues.username, formValues.code, formValues.password)
      .then(() => {
        setFormValues({
          ...formValues,
          resetStatus: "Password reset successful",
        }
        );
        alert("Password reset successful")
        // Redirect to login page after successful password reset
        navigate('/login');
      })
      .catch((error) => {
        setFormValues({
          ...formValues,
          resetStatus: `Error resetting password: ${error.message}`,
        });
      });
  };

  function resetPassword(username, code, password) {
    if (code && password) {
      // If reset code and new password are provided, complete the password reset process
      return completePasswordReset(username, code, password);
    } else {
      // Otherwise, initiate the password reset process
      return initiatePasswordReset(username);

    }
  }

  function initiatePasswordReset(username) {
    const url = "http://127.0.0.1:8000/user/resetPassword/";
    const data = { username };
  
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // process the response data and return a success message and reset code
        return {
          message: "Reset code sent",
        };
      })
      .catch((error) => {
        // handle any errors and return an error message
        return `Error initiating password reset: ${error.message}`;
      });
  }

  function completePasswordReset(username, code, password) {
    const url = "http://127.0.0.1:8000/user/confirmReset/";
    const data = { username, code, password };
  
    return fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // process the response data and return a success message
        return "Password reset successful";
      })
      .catch((error) => {
        // handle any errors and return an error message
        return `Password reset failed: ${error.message}`;
      });
  }

  return (
      <div className="login-form">
        <h1>Reset Password</h1>
  {formValues.resetStatus  !== "Reset code sent" &&(
    <>
        <form onSubmit={handleResetSubmit}>
            <UserInput
                type="text"
                title="Username"
                name="username"
                value={formValues.username}
                onChange={handleFormChange}
            />
            <button className="button-style theme-color" type="submit">Submit</button>
    </form>

    </>
  

  )}
  { formValues.resetStatus === "Reset code sent" &&
    (<form onSubmit={handleNewPasswordSubmit}>
      <UserInput
        type="text"
        title="Username"
        name="username"
        value={formValues.username}
        onChange={handleFormChange}
      />
      <UserInput
        type="number"
        title="Reset code"
        name="code"
        value={formValues.code}
        onChange={handleFormChange}
      />
      <UserInput
        type="password"
        title="New password"
        name="password"
        value={formValues.password}
        onChange={handleFormChange}
      />
      <button className="button-style theme-color" type="submit">Submit</button>
    </form>
  )}
</div>
  );
}