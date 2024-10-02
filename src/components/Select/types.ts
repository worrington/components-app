import React from "react";

export interface Option {
  label: string;
  value: string;
  icon?: React.ReactElement | string;
}

export interface OptionGroup {
  groupName: string;
  options: Option[];
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLInputElement> {
  options: Option[];
  label?: string;
  helperText?: string;
  error?: boolean;
  maxVisibleOptions?: number
}
