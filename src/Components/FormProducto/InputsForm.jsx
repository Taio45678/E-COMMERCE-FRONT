import React from 'react'
import { useField } from "formik";


export const TextInput = ({ label, enableRemove, onRemove, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="container-input">
        {enableRemove && (
          <div className="remove" onClick={onRemove}>
            x
          </div>
        )}
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="input">
          <input className="text-input" {...field} {...props} />
          {meta.error ? <div className="error">{meta.error}</div> : null}
        </div>
      </div>
    );
  };

  export const TextAreaInput = ({ label, enableRemove, onRemove, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="container-input">
        {enableRemove && (
          <div className="remove" onClick={onRemove}>
            x
          </div>
        )}
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="input">
          <textarea className="text-area-input" {...field} {...props} />
          {meta.error ? <div className="error">{meta.error}</div> : null}
        </div>
      </div>
    );
  };