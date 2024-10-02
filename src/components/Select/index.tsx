"use client";
import React, { useEffect, useState } from "react";
import { moveSelectedToFront, sortOptionsByLabel } from "@/utils";

import { Label } from "./Label";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";
import { Option, SelectProps } from "./types";

import "./select.css";

/**
 * `Select` Component: A custom dropdown select component that displays a label, 
 * an input field with the selected option, and a dropdown of selectable options.
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

      if (selected) {
        const newOrderOptions = moveSelectedToFront(sortedOptions, selected);
        setRenderedOptions(newOrderOptions);
      }
    }
  }, [options, sortedOptions, value]);

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

export default Select;
