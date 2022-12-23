import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MySelectInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="select-input" {...field} {...props} />
      {/* {meta.touched && meta.error && <span className="error">{meta.error}</span>} */}
      <ErrorMessage name={props.name} component="span" className="custom-span-error" />
    </>
  );
};
