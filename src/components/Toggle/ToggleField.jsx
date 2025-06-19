import React, { useEffect } from "react";
import LabelField from '../Label/LabelField';
import './ToggleField.css';
import { useField } from "formik";

const ToggleField = ({ name, config, style }) => {
  const {
    display_name,
    read_only,
    maxWidth,
    minWidth,
    options = { true: "On", false: "Off" },
  } = config;

  const [field, , helpers] = useField(name);
  const value = field.value || false;

  const toggle = () => {
    if (read_only !== "true") {
      helpers.setValue(!value);
    }
  };

  useEffect(() => {
    if(field.value === ""){
      helpers.setValue(false)
    }
  },[])

  return (
    <div
      style={{
        ...style,
        minWidth: minWidth ? `${minWidth}px` : "200px",
        maxWidth: maxWidth ? `${maxWidth}px` : "500px",
      }}
      className="toggle-field"
    >
      <LabelField width={'37%'} htmlFor={name} label={display_name} />
      <div
        onClick={toggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: read_only === "true" ? "not-allowed" : "pointer",
        }}
      >
        <div className="toggle-container"
          style={{
            width: "45px",
            height: "24px",
            backgroundColor: value ? "#4caf50" : "#ccc",
            borderRadius: "999px",
            position: "relative",
            transition: "background-color 0.3s",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "2px",
              left: value ? "22px" : "2px",
              transition: "left 0.3s",
            }}
          />
        </div>
        <span>{value ? options["true"] : options["false"]}</span>
      </div>
    </div>
  );
};

export default ToggleField;
