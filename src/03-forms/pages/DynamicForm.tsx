import { Formik, Form } from "formik";
import { MySelectInput, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};
const validationFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.description);
    }

    if (rule.type === "minLenght") {
      schema = schema.min((rule as any).value || 2, rule.description);
    }

    if (rule.type === "email") {
      schema = schema.email(rule.description);
    }
  }

  validationFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...validationFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ name, label, type, placeholder, options }) => {
              if (type === "input" || type === "passowrd" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelectInput key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelectInput>
                );
              }

              throw new Error(`Type ${type} is not supported`);
            })}
            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
