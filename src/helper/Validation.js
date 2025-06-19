import * as Yup from 'yup';

export const validationSchema = Yup.object({
  location_name: Yup.string().required('Name is required'),
  location_code: Yup.string().required('Code is required'),
  state:Yup.string().required('State is required'),
  region:Yup.string().required('Region is required'),
  pincode:Yup.number().typeError("Pincode must be a number").test("len", "Pincode must be 6 digits", val => val && val.toString().length === 6),
  lat: Yup.number()
  .typeError("Latitude must be a number")
  .required("Latitude is required")
  .min(-90, "Latitude must be ≥ -90")
  .max(90, "Latitude must be ≤ 90"),
  long: Yup.number()
  .typeError("Longitude must be a number")
  .required("Longitude is required")
  .min(-180, "Longitude must be ≥ -180")
  .max(180, "Longitude must be ≤ 180"),
});