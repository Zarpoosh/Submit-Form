import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const btnstyle = {
    margin: "8px 0px",
  };
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "60px auto",
  };

  // formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    // یه تابعه
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "must be 10 characters or less")
        .min(5, "must be 5 characters or more")
        .required("*Required"),
      password: Yup.string().required("*Required"),
    }),
  });

  return (
    <Grid>
      <form onSubmit={formik.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar src="data:image/png;base64,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">
              M
            </Avatar>
            <h2>Sign in</h2>
          </Grid>

          <TextField
            {...formik.getFieldProps("username")}
            id="username"
            sx={{ marginTop: "15px" }}
            label="User name"
            placeholder="Enter Username"
            fullWidth
          />
          {formik.touched.username && formik.errors.username ? (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.username}
            </div>
          ) : null}
          <TextField
            {...formik.getFieldProps("password")}
            id="password"
            sx={{ marginTop: "15px" }}
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
          />
          {formik.touched.password && formik.errors.password ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.password}
            </p>
          ) : null}

          <FormControlLabel
            defaultChecked
            label="Remember me"
            control={<Checkbox name="checked" color="primary" />}
          />

          <Button
            style={btnstyle}
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              color: "white",
              bgcolor: "#13AE8C",
              "&:hover": {
                background: "#13AE8C",
              },
            }}
          >
            Sign in
          </Button>

          <Typography sx={{ marginTop: "10px" }}>
            <Link href="#">Forgot Password?</Link>
          </Typography>
          <Typography sx={{ marginTop: "10px" }}>
            Do You have an account?
            <Link to="/SignUp" href="#">
              Sign Up
            </Link>
          </Typography>
          <Grid marginTop="60%" align="center">
            <Typography color="teal" fontSize="small">
              Developed by Minoo Zarpoosh
            </Typography>
          </Grid>
        </Paper>
      </form>
    </Grid>
  );
};

export default Login;
