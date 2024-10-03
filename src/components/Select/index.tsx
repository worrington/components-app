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
  // Sort options only once on initialization
  const sortedOptions = sortOptionsByLabel(options);

  // State management
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();
  const [filteredOptionsList, setFilteredOptionsList] = useState<Option[]>(sortedOptions);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [prevSelectedOption, setPrevSelectedOption] = useState<Option | undefined>();

  // Handle option selection
  const handleOptionSelect = (option: Option) => {
    const reorderedOptions = moveSelectedToFront(sortedOptions, option);
    setSelectedOption(option);
    setFilteredOptionsList(reorderedOptions);
    setIsDropdownOpen(false); // Close the dropdown
    setPrevSelectedOption(option); // Store the previous selection
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;

    if (!selectedOption) {
      setPrevSelectedOption(selectedOption); // Save the previous selected option
    }

    setSelectedOption({ value: "", label: term });

    // Update the displayed options based on the search term
    const filtered = filteredOptions(sortedOptions, term);
    setFilteredOptionsList(filtered);

    if (!isDropdownOpen && term.length > 0) {
      setIsDropdownOpen(true); // Open the dropdown if searching
    }
  };

  // Sync the selected option with the value prop
  useEffect(() => {
    if (value) {
      const selected = options.find((option) => option.value === value);
      setSelectedOption(selected);
    }
  }, [options, value]);

  // Reset search term when dropdown closes without a valid selection
  useEffect(() => {
    if (!isDropdownOpen && selectedOption?.value === "") {
      setSelectedOption(prevSelectedOption); // Revert to previous selection
    }
  }, [isDropdownOpen, prevSelectedOption]);

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
          options={filteredOptionsList}
          onOptionSelect={handleOptionSelect}
          maxVisibleOptions={maxVisibleOptions}
          selectedOption={selectedOption}
        />
      )}
    </fieldset>
  );
};

export default Select;
