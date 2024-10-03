"use client";
import React, { useEffect, useState } from "react";
import { filteredOptions, moveSelectedToFront, sortOptionsByLabel } from "@/utils";

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
  isSearched,
  maxVisibleOptions = 3,
  ...rest
}) => {
  // Sort options on initialization
  const sortedOptions = sortOptionsByLabel(options);

  // State management
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();
  const [optionsList, setOptionsList] = useState<Option[]>(sortedOptions);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [previousSelectedOption, setPreviousSelectedOption] = useState<Option | undefined>();

  // Handle option selection
  const handleOptionSelect = (option: Option) => {
    const reorderedOptions = moveSelectedToFront(sortedOptions, option);
    setOptionsList(reorderedOptions);
    setSelectedOption(option);
    setPreviousSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    // Update the selected option with the search term
    if (!selectedOption) {
      setPreviousSelectedOption(selectedOption);
    }

    setSelectedOption({ value: "", label: searchTerm });

    // Update options based on the search term
    const filtered = filteredOptions(sortedOptions, searchTerm);
    setOptionsList(filtered);

    if (!isDropdownOpen && searchTerm.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  // Sync the selected option with the value prop
  useEffect(() => {
    if (value) {
      const foundOption = options.find((option) => option.value === value);
      setSelectedOption(foundOption);
    }
  }, [options, value]);

  // Reset search term when dropdown closes without a valid selection
  useEffect(() => {
    if (!isDropdownOpen && selectedOption?.value === "") {
      setSelectedOption(previousSelectedOption);

      const reorderedOptions = previousSelectedOption
        ? moveSelectedToFront(sortedOptions, previousSelectedOption)
        : sortedOptions;

      setOptionsList(reorderedOptions);
    }
  }, [isDropdownOpen, previousSelectedOption]);

  return (
    <fieldset className="relative">
      <Label
        htmlFor={rest?.id || "select-input"}
        label={label || ""}
        isActive={!!selectedOption?.value || isDropdownOpen}
        required={rest?.required}
      />

      <Input
        {...rest}
        id={rest?.id || "select-input"}
        value={selectedOption?.label || ""}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        isFocus={isDropdownOpen}
        isSearched={isSearched}
        onChange={handleSearchChange}
      />

      {isDropdownOpen && (
        <Dropdown
          options={optionsList}
          onOptionSelect={handleOptionSelect}
          maxVisibleOptions={maxVisibleOptions}
          selectedOption={selectedOption}
        />
      )}
    </fieldset>
  );
};

export default Select;
