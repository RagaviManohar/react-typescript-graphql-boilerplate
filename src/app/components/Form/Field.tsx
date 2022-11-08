import React, { forwardRef } from 'react';
import { uniqueId } from 'lodash';

import { TextField, Checkbox } from '@mui/material';
// import { ErrorMessage } from '@hookform/error-message';
import { Controller } from 'react-hook-form';

export type FieldComponentType = {
  name: string;
  register: Function;
  placeholder?: string | any;
  value?: string | number;
  error?: string;
  defaultValue?: string | Number;
  errors: Object;
  control?: Object | any;
  input?: JSX.Element | any;
  options?: Array<string> | any;
  rules: Object;
  children?: JSX.Element[] | any;
};

const typeOfFields = {
  default: 'default',
  control: 'control',
};

const generateField = (FormComponent, type = typeOfFields.default) => {
  const FieldComponent = forwardRef(
    (
      {
        register,
        rules,
        error,
        name,
        control,
        errors,
        children,
        ...props
      }: FieldComponentType,
      ref: any,
    ) => {
      //it create a unique id with the parameter as prefix
      const fieldId = uniqueId('form-field-');

      const getComponent = () => {
        if (type === typeOfFields.control) {
          return (
            <Controller
              render={({ field }) => (
                <FormComponent
                  id={fieldId}
                  control={control}
                  {...field}
                  {...props}
                />
              )}
              control={control}
              name={name}
              rules={rules}
            />
          );
        }

        return (
          <FormComponent
            id={fieldId}
            name={name}
            ref={ref}
            control={control}
            {...register(name, { ...rules })}
            {...props}
          />
        );
      };

      return (
        <>
          {getComponent()}

          {/* {errors[name] && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <p aria-label={`${name}Error`}>{message}</p>
              )}
            />
          )} */}
        </>
      );
    },
  );
  FieldComponent.displayName = 'FieldComponent';
  return FieldComponent;
};

const Field = {
  Input: generateField(TextField),
  Checkbox: generateField(Checkbox),
  // Radio: generateField(Radio, typeOfFields.control),
  // Select: generateField(Select, typeOfFields.control),
};

export default Field;
