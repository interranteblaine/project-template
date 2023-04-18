import React, { ChangeEvent, useRef } from "react";
import {
  SpaceBetween,
  FormField,
  Button,
  Container,
  Box,
} from "@cloudscape-design/components";
import ImagePreview from "../ImagePreview";
import { formatFileSize } from "../utils";

interface Props<FormValues> {
  onChange: (name: keyof FormValues, value: File[]) => void;
  value: File[];
  name: keyof FormValues;
}

const ImageFileInput = <FormValues,>(props: Props<FormValues>) => {
  const hiddenInputElem = useRef<HTMLInputElement | null>(null);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const nextState = [...props.value, ...e.target.files];
    props.onChange(props.name, nextState);
    e.target.value = "";
  };

  const handleDismiss = (index: number) => {
    const nextState = [
      ...props.value.slice(0, index),
      ...props.value.slice(index + 1),
    ];
    props.onChange(props.name, nextState);
  };

  return (
    <SpaceBetween size="xs">
      <FormField>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          multiple
          hidden
          ref={hiddenInputElem}
          onChange={handleSelect}
        />
        <Button
          iconName="upload"
          formAction="none"
          onClick={() => hiddenInputElem?.current?.click()}
        >
          Select File
        </Button>
      </FormField>
      <SpaceBetween size="xs" direction="horizontal">
        {props.value.map((file, idx) => {
          return (
            <Container key={file.name}>
              <SpaceBetween size="xs">
                <ImagePreview
                  url={URL.createObjectURL(file)}
                  boxHeight={200}
                  boxWidth={200}
                />
                <Box variant="p">{`Name: ${file.name}`}</Box>
                <Box variant="p">{`Size: ${formatFileSize(file.size)}`}</Box>
                <Box textAlign="center">
                  <Button onClick={() => handleDismiss(idx)}>Remove</Button>
                </Box>
              </SpaceBetween>
            </Container>
          );
        })}
      </SpaceBetween>
    </SpaceBetween>
  );
};

export default ImageFileInput;
