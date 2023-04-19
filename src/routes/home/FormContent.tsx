import React from "react";
import {
  Form,
  SpaceBetween,
  Button,
  Container,
  Header,
  FormField,
  Input,
  Checkbox,
  Select,
  SelectProps,
  Textarea,
  TimeInput,
  DatePicker,
  RadioGroup,
} from "@cloudscape-design/components";
import TokenInput from "../../common/form/TokenInput";
import ImageFileInput from "../../common/form/ImageFileInput";
import useForm, { Validations } from "../../common/hooks/useForm";

type FormValues = {
  firstField: string;
  secondField: string;
  thirdField: string;
  fourthField: boolean;
  fifthField: string;
  sixthField: SelectProps.Option | null;
  seventhField: string | null;
  eightField: string[];
  ninthField: File[];
};

const defaultValues: FormValues = {
  firstField: "",
  secondField: "",
  thirdField: "",
  fourthField: false,
  fifthField: "",
  sixthField: null,
  seventhField: null,
  eightField: [],
  ninthField: [],
};

const validation: Validations<FormValues> = {
  firstField: [
    {
      isValid: (v) => !!v,
      message: "First field is required.",
    },
  ],
  secondField: [
    {
      isValid: (v) => !!v,
      message: "Second field is required.",
    },
  ],
  thirdField: [
    {
      isValid: (v) => /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(v),
      message: "Needs to follow HH:MM 24-hour format.",
    },
  ],
  ninthField: [
    {
      isValid: (v) => !!v.length,
      message: "Ninth field is required",
    },
  ],
};

const FormContent = ({ initialValues }: { initialValues?: FormValues }) => {
  const { values, errors, handleChange, handleSubmit, handleReset } =
    useForm<FormValues>(initialValues || defaultValues, validation);

  const onSubmit = (values: FormValues) => {
    console.log(JSON.stringify(values));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link" onClick={handleReset}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </SpaceBetween>
        }
        header={<Header variant="h1">Form header</Header>}
      >
        <Container header={<Header variant="h2">Form container header</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <FormField label="First field" errorText={errors.firstField}>
              <Input
                value={values.firstField}
                onChange={({ detail }) =>
                  handleChange("firstField", detail.value)
                }
              />
            </FormField>
            <FormField
              label="Second & third field"
              description="Specify date and time"
            >
              <SpaceBetween size="xl" direction="horizontal">
                <FormField stretch={true} errorText={errors.secondField}>
                  <DatePicker
                    onChange={({ detail }) =>
                      handleChange("secondField", detail.value)
                    }
                    value={values.secondField}
                    openCalendarAriaLabel={(selectedDate) =>
                      "Choose date" +
                      (selectedDate ? `, selected date is ${selectedDate}` : "")
                    }
                    nextMonthAriaLabel="Next month"
                    placeholder="YYYY/MM/DD"
                    previousMonthAriaLabel="Previous month"
                    todayAriaLabel="Today"
                  />
                </FormField>
                <FormField
                  stretch={true}
                  errorText={errors.thirdField}
                  constraintText="Use 24-hour format."
                >
                  <TimeInput
                    onChange={({ detail }) =>
                      handleChange("thirdField", detail.value)
                    }
                    value={values.thirdField}
                    format="hh:mm"
                    placeholder="hh:mm"
                  />
                </FormField>
              </SpaceBetween>
            </FormField>
            <FormField label="Fourth field" errorText={errors.fourthField}>
              <Checkbox
                checked={values.fourthField}
                onChange={({ detail }) =>
                  handleChange("fourthField", detail.checked)
                }
              />
            </FormField>
            <FormField label="Fifth field" errorText={errors.fifthField}>
              <Textarea
                onChange={({ detail }) =>
                  handleChange("fifthField", detail.value)
                }
                value={values.fifthField}
                placeholder="This is a placeholder"
              />
            </FormField>
            <FormField label="Sixth field" errorText={errors.sixthField}>
              <Select
                selectedOption={values.sixthField}
                onChange={({ detail }) =>
                  handleChange("sixthField", detail.selectedOption)
                }
                options={[
                  { label: "Option 1", value: "1" },
                  { label: "Option 2", value: "2" },
                  { label: "Option 3", value: "3" },
                ]}
                selectedAriaLabel="Selected"
              />
            </FormField>
            <FormField label="Seventh field" errorText={errors.seventhField}>
              <RadioGroup
                onChange={({ detail }) =>
                  handleChange("seventhField", detail.value)
                }
                value={values.seventhField}
                items={[
                  { value: "first", label: "First choice" },
                  { value: "second", label: "Second choice" },
                ]}
              />
            </FormField>
            <FormField label="Eight field" errorText={errors.eightField}>
              <TokenInput<FormValues>
                name="eightField"
                onChange={handleChange}
                value={values.eightField}
              />
            </FormField>
            <FormField label="Ninth field" errorText={errors.ninthField}>
              <ImageFileInput<FormValues>
                name="ninthField"
                onChange={handleChange}
                value={values.ninthField}
              />
            </FormField>
          </SpaceBetween>
        </Container>
      </Form>
    </form>
  );
};

export default FormContent;
