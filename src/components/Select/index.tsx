"use client";
import React, { useEffect, useState } from "react";
import { Option, SelectProps } from "./types";


const Select: React.FC<SelectProps> = ({ label, options, value, ...rest }) => {
  const [selectedValue, setSelectedValue] = useState<Option>();
  const [isFocused, setIsFocused] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleSelectChange = (option: Option) => { 
    setSelectedValue(option);
    setIsFocused(false);
    setisMenuOpen(false);
  };

  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      setSelectedValue(selectedOption);
    }
  }, [options, value]);


  console.log(isMenuOpen)
  return (
    <fieldset className="relative">
      {/* Label animado */}
      <label
        htmlFor={rest?.id || "select-input"}
        data-shrink={isFocused || selectedValue?.value}
      >
        {label}
      </label>

      {/* Input estilizado */}
      <div>
        <input
          {...rest}
          id={rest?.id || "select-input"}
          value={selectedValue?.label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly
          onClick={() => setisMenuOpen((prev) => !prev)}
        />
      </div>

      { isMenuOpen &&
 
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelectChange(option)}
            >
              {option.icon && option.icon} {option.label}
            </li>
          ))}
        </ul> }
    </fieldset>
  );
};

export default Select;
