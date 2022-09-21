import React from "react";
import "./Login.css";
import { Paper, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function Login(props) {
  let navigate = useNavigate();

  var strongRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
  );

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Field should contain a valid e-mail")
      .matches(/@[^.]*\./)
      .required(),
    password: yup
      .string()
      .matches(
        strongRegex,
        "password must contain uppercase,lowercase with num & 8 characters"
      )
      .required(),
  });

  const onSubmit = (values) => {
    navigate("/overview");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validateOnBlur: true,
    validationSchema: validationSchema,
  });

  return (
    <div>
      <Paper className="paper">
        <div>
          <div style={{ fontWeight: "600", fontSize: "24px" }}>Login</div>
          <div style={{ fontWeight: "400", fontSize: "16px" }}>
            Kindly enter your details to log in
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="login_input_password">
            <TextField
              size="small"
              label="Email"
              placeholder="Email"
              name="email"
              type="name"
              variant="outlined"
              className="login_textfield"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="Password_field_container">
            <span className="Password_field">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </span>
          </div>
          <div className="login_input_password">
            <TextField
              size="small"
              label="Password"
              placeholder="Password"
              type="password"
              name="password"
              variant="outlined"
              className="login_textfield"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="Password_field_container">
            <span className="Password_field">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </span>
          </div>
          <div className="login_Botton_container">
            <Button
              variant="outlined"
              className="login_Button"
              type="submit"
              disabled={!formik.isValid}
            >
              Login
            </Button>
          </div>
        </form>
        <div className="login_register">
          <div>
            <div className="forgotpassword">
              <span>Forgot your password?</span>
            </div>
          </div>
        </div>
        <div className="privacy-conatainer">
          <div>
            <a
              href="https://enyata.com/"
              className="privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <span className="and">and</span>
            <a
              href="https://enyata.com/"
              className="privacy"
              target="_blank"
              rel="noreferrer"
            >
              Terms of services
            </a>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Login;
