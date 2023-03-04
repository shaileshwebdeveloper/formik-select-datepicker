import * as Yup from "yup";

export const signUpSchema = Yup.object({
  rera: Yup.number().required("Please enter rera number"),
  state: Yup.string().required("Select State"),
     modified: Yup.date().required("Select Date"),
  //    approved:  Yup.date().default(() => new Date()).required("Select Date"),
  //    start: Yup.date().default(() => new Date()).required("Select Date"),
  //    end:  Yup.date().default(() => new Date()).required("Select Date"),
  filename: Yup.string().required("Please upload file"),
  url: Yup.string().trim().url("Must be a valid URL").required(),
});
