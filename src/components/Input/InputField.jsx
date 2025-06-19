import React from "react";
import LabelField from "../Label/LabelField";
import './InputField.css'
import { useField } from "formik";

const InputField = ({ name, placeholder ='', config }) => {
  const [field, meta] = useField(name)
  const {
    display_name,
    read_only,
    mandatory,
    maxLength,
    maxWidth,
    minWidth,
  } = config;
  return (
    <div 
        style={{
            minWidth: minWidth ? `${minWidth}px` : "200px",
            maxWidth: maxWidth ? `${maxWidth}px` : "500px"
        }} 
        className="input_field"
    >
        <LabelField htmlFor={name} mandatory={config.mandatory === "true" || config.mandatory === true} label={display_name} />
        <div style={{display:'flex', flexDirection:'column'}}>
         <input
            {...field}
            type="text"
            name={name}
            placeholder={placeholder}
            readOnly={read_only === "true"}
            required={mandatory === "true"}
            maxLength={maxLength}
            style={{ 
              padding: "0.5rem", 
              fontSize: "0.8rem", 
              border: meta.touched && meta.error ? "1px solid red" : "1px solid #ccc",
              borderRadius: "4px"
            }}
        />
          {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    </div>
  );
};

export default InputField;
