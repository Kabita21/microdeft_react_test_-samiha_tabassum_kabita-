import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("naim.microdeft@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
        const response = await 
        fetch(
          "https://react-interview.crd4lc.easypanel.host/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );

        if (!response.ok) {
            throw new Error("Failed to login");
          }
    
          const data = await response.json();
          const { token } = data;

          localStorage.setItem("authToken", token);

          setMessage("Login successful!");
        } catch (error) {
          setMessage(error.message);
        }
      };
    };

    export default LoginForm;