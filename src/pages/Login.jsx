import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebaseServices";
import { useForm } from "react-hook-form";

function Login() {
  const [password, setPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    try {
      const email = data["email"];
      const password = data["password"];

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("result", result);
    } catch (error) {
      console.log("login fail");
    }
  }

  function handleHidePassword() {
    setPassword(!password);
  }
  return (
    <div className={styles.outer}>
      <p className={styles.para}>Register Here</p>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: "User name is required",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "Please enter a valid email",
            },
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <div className={styles.pass}>
          <input
            type={password ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              pattern: {
                value:
                  // /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  // /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  // /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  `${
                    (String.fromCharCode(Math.floor(Math.random() * 26) + 65),
                    String.fromCharCode(Math.floor(Math.random() * 26) + 97),
                    Math.floor(Math.random() * 9),
                    String.fromCharCode(Math.floor(Math.random() * 15) + 33))
                  }`,
                message: "Please create a strong password",
              },
              minLength: {
                value: 8,
                message: "password minimum 8 charater",
              },
              max: {
                value: 10,
                message: "password maximu 10 charater",
              },
            })}
          />
          <div className={styles.hideShow} onClick={handleHidePassword}>
            <h5>{password ? "Hide" : "Show"}</h5>
            {password ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </div>
        </div>
        {errors.password && <p>{errors.password.message}</p>}

        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;

// String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// Math.floor(Math.random() * 9);
// String.fromCharCode(Math.floor(Math.random() * 15) + 33)
