"use client";
import React, { useEffect, useState } from "react";
import { Option, SelectProps } from "./types";

const OPTION_HEIGHT = 40; // Height of each option in pixels

/**
 * Select component that displays a list of options, allowing the user to select one.
 * 
 * @param {string} label - The label for the select input.
 * @param {Option[]} options - Array of options for the dropdown menu.
 * @param {string | number} value - The selected value (controlled component).
 * @param {number} maxVisibleOptions - Maximum number of options to show before scrolling.
 * @param {object} rest - Additional props passed to the input element.
 * 
 * @returns {JSX.Element} A styled select input with options displayed in a dropdown menu.
 */
const Select: React.FC<SelectProps> = ({ 
  label, 
  options, 
  value, 
  maxVisibleOptions = 3, 
  ...rest 
}) => {
  const [selectedValue, setSelectedValue] = useState<Option | undefined>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Handles the selection of an option from the dropdown.
   * Updates the selected value and closes the menu.
   * 
   * @param {Option} option - The selected option object.
   */
  const handleSelectChange = (option: Option) => { 
    setSelectedValue(option);
  };

  // Set the selected value when the value prop changes (controlled component behavior)
  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      setSelectedValue(selectedOption);
    }
  }, [options, value]);

  // Calculate the maximum height for the dropdown menu based on the number of visible options
  const maxHeight = maxVisibleOptions * OPTION_HEIGHT;

  return (
    <fieldset className="relative">
      <label
        htmlFor={rest?.id || "select-input"}
        className={`absolute left-2 transition-all duration-300 ease-in-out label text-gray-500
        ${selectedValue || isMenuOpen ? "text-xs -top-[8px] bg-white px-1" : "text-base top-2"}`}
        data-shrink={selectedValue?.value}
      >
        {label}
      </label>

      <div>
        <input
          {...rest}
          id={rest?.id || "select-input"}
          value={selectedValue?.label || ""}
          className="w-full py-2 px-4 border border-gray-300 rounded hover:shadow-md hover:cursor-pointer focus:outline-none focus:border-[#164E63] focus:border-1"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          readOnly
        />
      </div>

      {isMenuOpen && (
        <ul
          className="flex flex-col absolute w-full p-2 gap-1 mt-1 rounded shadow-md bg-white overflow-y-auto"
          style={{ maxHeight }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="px-2 py-1 cursor-default hover:font-medium"
              onClick={() => {handleSelectChange(option); setIsMenuOpen(false)}}
            >
              {option.icon && option.icon} {option.label}
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
};

export default Select;
