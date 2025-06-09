import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone is required'),
  city:Yup.string().required('City is required'),
  address:Yup.string().required('Address is required'),
  state:Yup.string().required('State is required'),
  location:Yup.string().required('location is required'),
  pincode:Yup.string().required('pincode is required'),
  work: Yup.array().of(Yup.string().required('Work field is required'))
  .min(1, 'At least one work entry is required'),
});