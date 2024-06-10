import React, { useState } from "react";
import styles from "../styles/register.module.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseServices";
import { useForm } from "react-hook-form";

function Register() {
  const [hidePassword, setHidePassword] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  async function onSubmit(data) {
    try {
      const email = data["email"];
      const password = data["password"];

      // console.log(data);
      // console.log(password);

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("result", result);
    } catch (error) {
      console.log("registration fail");
    }
  }

  function handleHidePassword() {
    setHidePassword(!hidePassword);
  }

  function handleHideConfirmPassword() {
    setHideConfirmPassword(!hideConfirmPassword);
  }

  return (
    <div className={styles.outer}>
      <p className={styles.para}>Register Here</p>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          // name="name"
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
          // name="email"
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
        <div className={styles.hidePassword}>
          <input
            type={hidePassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            // name="password"
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
              maxLength: {
                value: 10,
                message: "password maximu 10 charater",
              },
            })}
          />
          <div className={styles.password} onClick={handleHidePassword}>
            <h5>{hidePassword ? "Hide" : "Show"}</h5>
            {hidePassword ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </div>
        </div>
        {errors.password && <p>{errors.password.message}</p>}
        <div className={styles.hidePassword}>
          <input
            type={hideConfirmPassword ? "text" : "password"}
            placeholder="confirmPassword"
            id="confirmPassword"
            // name="confirmPassword"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm password is required",
              },
              validate: (value) => {
                let password = getValues("password");
                if (value === password) {
                  return true;
                }
                return "Password & confirm password are not match!";
              },
            })}
          />
          <div className={styles.password} onClick={handleHideConfirmPassword}>
            <h5>{hideConfirmPassword ? "Hide" : "Show"}</h5>
            {hideConfirmPassword ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </div>
        </div>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button className={styles.btn} type="submit">
          Register
        </button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
