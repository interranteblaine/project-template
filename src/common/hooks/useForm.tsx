import React, { useState } from "react";

interface Validation<ValueType> {
  isValid: (value: ValueType) => boolean;
  message: string;
}

export type Validations<FormValues> = {
  [Key in keyof Partial<FormValues>]: Array<Validation<FormValues[Key]>>;
};

type Errors<FormValues> = Record<keyof FormValues, string>;

const useForm = <FormValues,>(
  initialValues: FormValues,
  validations?: Validations<FormValues>
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors<FormValues>>(
    {} as Errors<FormValues>
  );

  const handleChange = <Key extends keyof FormValues>(
    name: Key,
    value: FormValues[Key]
  ) => {
    setValues((state) => ({ ...state, [name]: value }));
    setErrors((state) => ({ ...state, [name]: "" }));
  };

  const handleSubmit = (onSubmit: (values: FormValues) => void) => {
    return () => {
      const hasErrors = validate()
      if (hasErrors) return;
      onSubmit(values);
    };
  };

  const validate = () => {
    if (!validations) return false
    let hasErrors = false
    for (const key of Object.keys(validations)) {
      const value = values[key as keyof FormValues];
      const tests = validations[key as keyof FormValues];
      for (const test of tests) {
        if (test.isValid(value)) continue;
        setErrors((state) => ({ ...state, [key]: test.message }));
        hasErrors = true
      }
    }
    return hasErrors
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({} as Errors<FormValues>)
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
  };
};

export default useForm;
