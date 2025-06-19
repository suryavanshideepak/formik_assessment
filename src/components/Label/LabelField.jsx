import React from "react";
import './LabelField.css'

const LabelField = ({ htmlFor, label, width='14%', mandatory }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="label-container"
      style={{
        width: width
      }}
    >
      {label}{mandatory && <span >*</span>}
    </label>
  );
};

export default LabelField;
