"use client";
import React, { useEffect, useState } from "react";
import { DropdownProps, InputProps, LabelProps, Option, SelectProps } from "./types";
import { moveSelectedToFront, sortOptionsByLabel } from "@/utils";
import Icon from "../Icon";
import "./select.css";

const OPTION_HEIGHT = 38; // The height of each dropdown option in pixels

/**
 * Select Component: A custom dropdown select component that displays a label, 
 * an input field with the selected option, and a dropdown of selectable options.
 *
 * @param label - The label to be displayed above the select input.
 * @param options - Array of available options to choose from.
 * @param value - The current value of the select input.
 * @param maxVisibleOptions - The maximum number of options visible in the dropdown.
 * @param rest - Other props passed to the underlying input field.
 */
const Select: React.FC<SelectProps> = ({ 
  label, 
  options, 
  value, 
  maxVisibleOptions = 3, 
  ...rest 
}) => {
  // Sort options alphabetically by their labels
  const sortedOptions = sortOptionsByLabel(options); 

  // State to manage the selected option, displayed options, and dropdown visibility
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();
  const [renderedOptions, setRenderedOptions] = useState<Option[]>(sortedOptions);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set the selected option when a value is provided
    if (value) {
      const selected = options.find((option) => option.value === value);
      setSelectedOption(selected);
    }
  }, [options, value]);

  const handleSelectChange = (option: Option) => { 
    // Move the selected option to the top of the list and update state
    const newOrderOptions = moveSelectedToFront(sortedOptions, option);

    setSelectedOption(option);
    setRenderedOptions(newOrderOptions);
    
    // Close the dropdown menu after 400 ms
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400);
  };

  return (
    <fieldset className="relative">
      <Label
        htmlFor={rest?.id || "select-input"}
        label={label || ""}
        isActive={!!selectedOption || isMenuOpen}
        required={rest?.required}
      />
      
      <Input 
        {...rest} 
        id={rest?.id || "select-input"} 
        value={selectedOption?.label || ""} 
        onClick={() => setIsMenuOpen((prev) => !prev)}
        isFocus={isMenuOpen}
      />

      {isMenuOpen &&
        <Dropdown
          options={renderedOptions}
          onOptionSelect={handleSelectChange}
          maxVisibleOptions={maxVisibleOptions}
          selectedOption={selectedOption}
        />
      }
    </fieldset>
  );
};

/**
 * Label Component: Renders a label for the input field and changes its position and size based on focus.
 *
 * @param htmlFor - The ID of the input field this label is associated with.
 * @param label - The text content of the label.
 * @param isActive - Whether the input field is active (focused or has a value).
 * @param required - Whether the field is required.
 */
const Label: React.FC<LabelProps> = ({ htmlFor, label, isActive, required }) => (
  <label
    htmlFor={htmlFor}
    className={`${isActive ? "text-xs -top-[8px] bg-white" : "text-base top-2"}`}
    data-shrink={isActive}
  >
    {required && "*"}
    {label}
  </label>
);

/**
 * Input Component: A read-only input field that displays the selected option and opens the dropdown.
 *
 * @param id - The ID of the input field.
 * @param value - The currently selected option's label.
 * @param isFocus - Whether the input is currently focused/open.
 * @param onClick - A callback function that opens the dropdown menu.
 * @param rest - Additional input props (e.g., placeholder, disabled).
 */
const Input: React.FC<InputProps> = ({ id, value, isFocus, onClick, ...rest }) => (
  <div className="select" onClick={onClick}>
    <input
      {...rest}
      id={id}
      value={value}
      readOnly
      className={`${isFocus && "border-deepTeal"}`}
    />
    <span>
      <Icon name="ChevronDownIcon" height={20} width={20} />
    </span>
  </div>
);

/**
 * Dropdown Component: Displays the list of selectable options in the dropdown.
 *
 * @param options - Array of options to display in the dropdown.
 * @param selectedOption - The currently selected option.
 * @param maxVisibleOptions - Maximum number of options visible without scrolling.
 * @param onOptionSelect - Callback function to handle option selection.
 */
const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  maxVisibleOptions,
  onOptionSelect
}) => {
  const maxHeight = maxVisibleOptions * OPTION_HEIGHT;

  return (
    <div className="drop-down" style={{ maxHeight }}>
      <ul>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => onOptionSelect(option)}
          >
            <span>
              {option.icon && option.icon}
              {option.label}
            </span>

            {selectedOption === option && (
              <Icon name="CheckIcon" color="primary"/>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
