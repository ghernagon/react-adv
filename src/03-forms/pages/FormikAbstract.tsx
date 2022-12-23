import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckInput, MySelectInput, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", terms: false, jobType: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Should have 15 characters or less").required("Required"),
          lastName: Yup.string().max(15, "Should have 15 characters or less").required("Required"),
          email: Yup.string().email("Email format invalid").required("Required"),
          terms: Yup.boolean().oneOf([true], "Please accept terms and conditions"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "This option is not valid")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" />

            <MyTextInput label="Last Name" name="lastName" />

            <MyTextInput label="Email" name="email" type="email" />

            <MySelectInput name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelectInput>

            <MyCheckInput label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
