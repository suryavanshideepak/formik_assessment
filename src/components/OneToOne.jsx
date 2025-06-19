import React from "react";
import InputField from "./Input/InputField";
import SelectField from "./Select/SelectField";
import ToggleField from "./Toggle/ToggleField";

const OneToOne = ({ fields, visibleFields, style }) => {
  const renderField = (fieldKey, config) => {
    const type = config.field_type;

    switch (type) {
      case "related_field":
        return (
          <SelectField
            width={"22rem"}
            height={"10rem"}
            key={fieldKey}
            name={fieldKey}
            config={config}
            placeholder={`Select ${config.display_name}`}
          />
        );
      case "boolean":
        return (
          <ToggleField
            key={fieldKey}
            name={fieldKey}
            config={config}
          />
        );
      default:
        return (
          <InputField
            key={fieldKey}
            name={fieldKey}
            config={config}
            placeholder={`Enter ${config.display_name}`}
          />
        );
    }
  };

  return (
    <div className="form-grid" style={style}>
      {visibleFields.map((fieldKey) => {
        const config = fields[fieldKey];
        if (!config) return null;
        return renderField(fieldKey, config);
      })}
    </div>
  );
};

export default OneToOne;
