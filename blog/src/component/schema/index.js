import * as Yup from "yup";

export const customerValidationSchema = Yup.object().shape({
  title: Yup.string("")
    .required("this field can not be empty")
    .min(30, "min 30 character is required"),

  body: Yup.string()
  .required("this field can not be empty")
  .min(50, "min 50 character is required"),

});