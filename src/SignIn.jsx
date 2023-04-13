import { useState } from "react";
import "./App.css";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Person, Lock } from "@mui/icons-material"; //go to material ui icons to search
import { useFormik} from "formik";
import * as Yup from "yup";
import HomePage from "./HomePage";

const SignIn = () => {
  const [isSucess, setSucces] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("*Email address is required"),
      password: Yup.string()
        .min(8, "enter atleast 8 characters")
        .required("*Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setSucces(true);
    },
  });
  return (
    <div className="mainblock">
      <div
        className={!isSucess ? "signin signin_wrapper" : "signin signin_sucess"}
        style={{ margin: "100px" }}
      >
        {isSucess ? (
          <HomePage />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h2>login Form</h2>
            <TextField
              name="email"
              type="text"
              placeholder="email"
              className="textField"
              inputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Person />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error_msg">{formik.errors.email}</div>
            ) : null}
            <TextField
              name="password"
              type="password"
              placeholder="password"
              className="textField"
              inputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      //material ui
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error_msg">{formik.errors.password}</div>
            ) : null}

            <button className="button1" type="submit">
              login
            </button>
            <h3>
              Not a member? <span className="signup">Signup</span>
            </h3>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
