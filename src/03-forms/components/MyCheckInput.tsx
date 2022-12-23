import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input className="checkbox-input" type="checkbox" {...field} {...props} />
        {label}
      </label>
      {/* {meta.touched && meta.error && <span className="error">{meta.error}</span>} */}
      <ErrorMessage name={props.name} component="span" className="custom-span-error" />
    </>
  );
};
