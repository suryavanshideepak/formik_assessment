import React from "react";
import LabelField from "../Label/LabelField";
import Select, { components } from "react-select";
import { useField, useFormikContext } from "formik";
import "./SelectField.css";



const SelectField = ({ name, config, placeholder = "Select", width = "100%", formType }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const {
    display_name,
    read_only,
    mandatory,
    maxWidth,
    minWidth,
    options = [],
  } = config;

  const selectOptions = options.map((opt) => ({
    value: opt,
    label: opt,
  }));

  const selectedOption = selectOptions.find((opt) => opt.value === field.value) || null;

  const CustomClearIndicator = (props) => {
    return (
      <components.ClearIndicator {...props}>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#ffe5e5", 
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #f44336",
          }}
        >
          <span style={{ color: "#f44336", fontWeight: "bold" }}>×</span>
        </div>
      </components.ClearIndicator>
    );
  };

  return (
    <div
      className="select-field"
      style={{
        minWidth: minWidth ? `${minWidth}px` : "200px",
        maxWidth: maxWidth ? `${maxWidth}px` : "500px",
      }}
    >
      {formType !== "oneToMany" && (
        <LabelField
          htmlFor={name}
          label={display_name}
          mandatory={mandatory === "true" || mandatory === true}
        />
      )}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Select
          inputId={name}
          name={name}
          placeholder={placeholder}
          value={selectedOption}
          options={selectOptions}
          components={{ ClearIndicator: CustomClearIndicator }}
          isDisabled={read_only === "true"}
          isClearable
          onChange={(option) => {
            setFieldValue(name, option ? option.value : "");
          }}
          styles={{
            container: (base) => ({
              ...base,
              width,
              fontSize: "0.85rem",
            }),
            control: (base, state) => ({
              ...base,
              borderColor: meta.touched && meta.error ? "red" : "#ccc",
              boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              minHeight: "38px",
              "&:hover": {
                borderColor: "#888",
              },
              "&:focus":{
                border: '3px solid blueviolet',
                boxShadow: '0 0 5px blueviolet', 
              }
            }),
          }}
        />
        {meta.touched && meta.error && (
          <div className="error" style={{ color: "red", fontSize: "0.75rem", marginTop: "0.25rem" }}>
            {meta.error}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
