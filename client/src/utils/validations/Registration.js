import { object, string, number, ref } from "yup";

const requiredMsg = "This field is required";

export const SignUpValidations = object({
  first_name: string()
    .max(20, "First name must not exceed 20 characters")
    .required(requiredMsg),

  last_name: string()
    .max(20, "Last name must not exceed 20 characters")
    .required(requiredMsg),

  email: string().required(requiredMsg).email("Email is invalid"),

  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(40, "Password must not exceed 40 characters")
    .matches(/[a-z]+/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]+/, "Password must contain at least one uppercase character")
    .matches(
      /[@$!%*#?&]+/,
      "Password must contain at least one special character"
    )
    .matches(/\d+/, "Password must contain at least one number")
    .required(requiredMsg),
});
