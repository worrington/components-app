"use client";
import React, { useEffect, useState } from "react";
import { DropdownProps, InputProps, LabelProps, Option, SelectProps } from "./types";
import { moveSelectedToFront, sortOptionsByLabel } from "@/utils";
import Icon from "../Icon";
import "./select.css";

const OPTION_HEIGHT = 38; 

const Select: React.FC<SelectProps> = ({ 
  label, 
  options, 
  value, 
  maxVisibleOptions = 3, 
  ...rest 
}) => {
  const sortedOptions = sortOptionsByLabel(options);

  const [selectedOption, setSelectedOption] = useState<Option | undefined>();
  const [renderedOptions, setRenderedOptions] = useState<Option[]>(sortedOptions);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (value) {
      const selected = options.find((option) => option.value === value);
      setSelectedOption(selected);
    }
  }, [options, value]);

  const handleSelectChange = (option: Option) => {
    const newOrderOptions = moveSelectedToFront(sortedOptions, option);

    setSelectedOption(option);
    setRenderedOptions(newOrderOptions);
    
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
