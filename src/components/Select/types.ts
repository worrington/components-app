import React from "react";

export interface Option {
  label: string;
  value: string;
  icon?: React.ReactElement | string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLInputElement> {
  options: Option[];
  label?: string;
  helperText?: string;
  error?: boolean;
  maxVisibleOptions?: number
}

 export interface LabelProps {
  htmlFor: string;
  label: string;
  isActive: boolean;
  required?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  onClick: () => void;
  isFocus: boolean;
}

export interface DropdownProps {
  options: Option[];
  selectedOption?: Option;
  onOptionSelect: (option: Option) => void;
  maxVisibleOptions: number;
}
