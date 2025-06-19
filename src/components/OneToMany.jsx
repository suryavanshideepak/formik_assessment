import React from "react";
import { FieldArray, useFormikContext } from "formik";
import SelectField from "./Select/SelectField";
import InputField from "./Input/InputField";

const OneToMany = ({ fields }) => {
  const { values } = useFormikContext();

  const fieldEntries = Object.entries(fields).filter(
    ([, config]) => config.field_type !== "json"
  );

  return (
    <div className="one-to-many-container">
      <p>Map Loading Points</p>

      <FieldArray name="loading_points">
        {({ push, remove }) => (
          <table className="one-to-many-table">
            <thead>
              <tr>
                <th>S.No.</th>
                {fieldEntries.map(([key, config]) => (
                  <th key={key}>{config.display_name}</th>
                ))}
                
              </tr>
            </thead>

            <tbody>
              {values.loading_points.map((_, index) => {
                const isFirst = index === 0;
                const isLast = index === values.loading_points.length - 1;

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    {fieldEntries.map(([key, config]) => {
                      const fieldName = `loading_points[${index}].${key}`;
                      const fieldType = config.field_type;

                      if (fieldType === "related_field") {
                        return (
                          <td key={fieldName}>
                            <SelectField
                              width={'16rem'}
                              formType={'oneToMany'}
                              name={fieldName}
                              config={config}
                              placeholder={`Select ${config.display_name}`}
                            />
                          </td>
                        );
                      } else {
                        return (
                          <td key={fieldName}>
                            <InputField
                              name={fieldName}
                              config={config}
                              placeholder={config.display_name}
                            />
                          </td>
                        );
                      }
                    })}

                    <td style={{display:`${!isFirst && isLast ? 'flex' : ''}`,justifyContent:'center', alignItems:'center', marginTop:'13px'}}>
                      {isFirst && values.loading_points.length === 1 && (
                        <button
                          className="add-row-button"
                          type="button"
                          onClick={() =>
                            push({
                              vch_cat: "",
                              consignor: "",
                              loading_point: ""
                            })
                          }
                        >
                          <label> + </label> Add Row
                        </button>
                      )}

                      {!isFirst && isLast && (
                        <>
                          <button className="remove-row-button" type="button" onClick={() => remove(index)}>-</button>
                          <button
                            className="add-row-button"
                            type="button"
                            onClick={() =>
                              push({
                                vch_cat: "",
                                consignor: "",
                                loading_point: ""
                              })
                            }
                          >
                            <label> + </label> Add Row
                          </button>
                        </>
                      )}

                      {!isFirst && !isLast && (
                        <button className="remove-row-button" type="button" onClick={() => remove(index)}>-</button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </FieldArray>
    </div>
  );
};

export default OneToMany;
