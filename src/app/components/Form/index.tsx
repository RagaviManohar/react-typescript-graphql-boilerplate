import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { isArray, get, isObject, isEmpty } from 'lodash';

//to defined types for the variables
type FormType = {
  formName: string;
  onSubmit?: Function | any;
  onError?: Function | any;
  children: JSX.Element | JSX.Element[];
  useFormProps?: {
    mode: 'onSubmit';
    reValidateMode: 'onChange';
  };
};

export const Form = ({
  formName,
  useFormProps,
  onSubmit,
  onError,
  children,
  ...props
}: FormType) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    ...useFormProps,
  });

  const getFormElement = child =>
    React.createElement(child.type, {
      ...{
        ...child.props,
        register,
        control,
        errors,
        key: child.props.name,
      },
    });

  const getAlteredChildren = childrenArray =>
    React.Children.map(childrenArray, child => {
      const propsChildren = get(child, 'props.children', '');

      // condition to check if it is a span tag and add new props.
      if (!isArray(propsChildren) && !isEmpty(child.props.name)) {
        return getFormElement(child);
      }

      // condition to check if the dom extends with object or array of children.
      if (isArray(propsChildren) || isObject(propsChildren)) {
        const alteredChildren = getAlteredChildren(propsChildren);

        // cloneElement with modified children array.
        return React.cloneElement(child, { ...child.props }, [
          ...alteredChildren,
        ]);
      }

      return child;
    });

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} {...props}>
      {getAlteredChildren(children)}
    </form>
  );
};

export default memo(Form);

export { default as Field } from './Field';
