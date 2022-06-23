import { TextField, Typography } from "@mui/material";
import { useField, ErrorMessage } from "formik";

const TextFields = ({ lable, type, ...props }) => {
  const [field, meta] = useField(props);


  return (
    <TextField
      type={type}
      fullWidth
      error={meta.touched && meta.error}

      variant="outlined"
      label={lable}
      name={field?.name}
      {...props}
      {...field}

      onChange={field.onChange}
      margin="normal"
      helperText={
        <Typography
          align="right"
          style={{
            color: "red"
          }}
          component="div"
          variant="subtitle2"
        >
          {<ErrorMessage name={field?.name} />}
        </Typography>
      }


    />
  );
};
export default TextFields;