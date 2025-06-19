import React from "react";
import OneToOne from "../components/OneToOne";
import OneToMany from "../components/OneToMany";
import { Form, Formik } from "formik";
import { validationSchema } from "../helper/Validation";

const CreateLocation = ({ field_config }) => {
  const oneToOneFields = field_config["One to One"] || {};
  const oneToManyFields = field_config["One to Many"] || {};

  const oneToOneInitials = Object.keys(oneToOneFields).reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  const oneToManyRowTemplate = Object.entries(oneToManyFields).reduce((acc, [key, config]) => {
    if (config.field_type !== "json") {
      acc[key] = "";
    }
    return acc;
  }, {});
  
  const initialValues ={
    ...oneToOneInitials,
    loading_points:[oneToManyRowTemplate]
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values,   {resetForm} ) => {
        console.log("Form Value :-", values);
        resetForm()
      }}
    >
      <Form>
      <h2 style={{margin:1}}>Create Location</h2>
      <OneToOne 
        fields={oneToOneFields} 
        visibleFields={
          [
            "location_name",
            "location_code",
            "alias1",
            "alias2",
            "alias3",
            "state",
            "region",
            "pincode",
            "lat",
            "long",
            "is_loadingpoint",
            "is_warehouse_point",
            "vch_checking_req"
          ]
        }
      />
      <OneToMany fields={field_config["One to Many"]} />
      <OneToOne 
        fields={oneToOneFields} 
        visibleFields={
          [
            "is_active",
            "is_lock",
            "is_approve"
          ]
        }
        style={{
          display:'flex',
          flexDirection:'column',
        }}
      />
      <button type='submit' className="save-button" >Save</button>
      <button className="cancel-button" >Cancel</button>
      </Form>
    </Formik>
  );
};

export default CreateLocation;
