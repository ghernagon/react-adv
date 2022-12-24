import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{ name: "", email: "", password1: "", password2: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Should have at least 2 characters")
            .max(15, "Should have 15 characters or less")
            .required("Required"),
          email: Yup.string().email("Email format invalid").required("Required"),
          password1: Yup.string().min(6, "Should have at least 6 characters").required("Required"),
          password2: Yup.string()
            .min(6, "Should have at least 6 characters")
            .required("Required")
            .oneOf([Yup.ref("password1"), null], "Passwords must match"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Name" name="name" />
            <MyTextInput label="Email" name="email" type="email" />
            <MyTextInput label="Password" name="password1" type="password" />
            <MyTextInput label="Confirm password" name="password2" type="password" />
            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
