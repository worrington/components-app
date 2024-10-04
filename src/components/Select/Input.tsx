import React from 'react';
import Icon from "../Icon";
import { InputProps } from "./types";

/**
   * Input Component: A input field that displays the selected option and opens the dropdown.
   *
   * @param id - The ID of the input field.
   * @param value - The currently selected option's label.
   * @param isFocus - Whether the input is currently focused/open.
   * @param onClick - A callback function that opens the dropdown menu.
   * @param rest - Additional input props (e.g., placeholder, disabled).
   */
export const Input: React.FC<InputProps> = ({ id, value, isFocus, isSearched=false, onClick, ...rest }) => (
  <div className="select" onClick={onClick}>
    <input
      {...rest}
      autoComplete="off"
      id={id}
      value={value}
      readOnly={!isSearched}
      className={`${isFocus && "border-deepTeal"}`}
    />
    <span>
      <Icon name="ChevronDownIcon" height={20} width={20} />
    </span>
  </div>
);
