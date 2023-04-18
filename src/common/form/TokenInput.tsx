import React, { useState } from "react";
import {
  SpaceBetween,
  FormField,
  Input,
  TokenGroup,
  Button,
} from "@cloudscape-design/components";

interface Props<FormValues> {
  onChange: (name: keyof FormValues, value: string[]) => void;
  value: string[];
  name: keyof FormValues;
}

const TokenInput = <FormValues,>(props: Props<FormValues>) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const newItem = input;
    const nextState = [...props.value, newItem];
    props.onChange(props.name, nextState);
    setInput("");
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
        <SpaceBetween size="xl" direction="horizontal">
          <Input
            value={input}
            onChange={({ detail }) => setInput(detail.value)}
          />
          <Button onClick={handleAdd} formAction="none">
            Add Item
          </Button>
        </SpaceBetween>
      </FormField>
      <TokenGroup
        onDismiss={({ detail: { itemIndex } }) => handleDismiss(itemIndex)}
        items={props.value.map((item) => {
          return {
            label: item,
            dismissLabel: `Remove ${item}`,
          };
        })}
      />
    </SpaceBetween>
  );
};

export default TokenInput;
