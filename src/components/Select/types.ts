import React from "react";
import { IconProps } from "../Icon/types";

/**
 * Option: Represents a selectable option in the Select component.
 */
export interface Option {
  /** The label to be displayed for the option. */
  label: string;
  /** The unique value associated with the option. */
  value: string;
  /** Optional icon to be displayed next to the label. */
  icon?: IconProps;
}

/**
 * SelectProps: Props for the Select component.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLInputElement> {
  /** Array of options to display in the dropdown. */
  options: Option[];
  /** The label displayed for the select input. */
  label?: string;
  /** Optional text providing additional context. */
  helperText?: string;
  /** Maximum number of options visible without scrolling. */
  maxVisibleOptions?: number;
}

/**
 * LabelProps: Props for the Label component.
 */
export interface LabelProps {
  /** The ID of the input field the label is associated with. */
  htmlFor: string;
  /** The text content of the label. */
  label: string;
  /** Whether the label is active (input focused or has value). */
  isActive: boolean;
  /** Indicates if the field is required. */
  required?: boolean;
}

/**
 * InputProps: Props for the Input component.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The currently selected option's label. */
  value?: string;
  /** Function that triggers opening of the dropdown. */
  onClick: () => void;
  /** Indicates if the input is currently focused/open. */
  isFocus: boolean;
}

/**
 * DropdownProps: Props for the Dropdown component.
 */
export interface DropdownProps {
  /** Array of selectable options. */
  options: Option[];
  /** The currently selected option. */
  selectedOption?: Option;
  /** Function to handle option selection. */
  onOptionSelect: (option: Option) => void;
  /** Maximum number of options visible without scrolling. */
  maxVisibleOptions: number;
}
