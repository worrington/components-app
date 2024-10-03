import Icon from "../Icon";
import { DropdownProps } from "./types";

// Height of each option in pixels
const OPTION_HEIGHT = 35;

/**
 * Dropdown Component: Displays the list of selectable options in the dropdown.
 *
 * @param options - Array of options to display in the dropdown.
 * @param selectedOption - The currently selected option.
 * @param maxVisibleOptions - Maximum number of options visible without scrolling.
 * @param onOptionSelect - Callback function to handle option selection.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  maxVisibleOptions,
  onOptionSelect
}) => {
  const maxHeight = maxVisibleOptions * OPTION_HEIGHT;

  return (
    <div className="drop-down" style={{ maxHeight }}>
      <ul>
        {options.length > 0 ? options.map((option) => (
          <li
            key={option.value}
            onClick={() => onOptionSelect(option)}
          >
            <span>
              {option.icon && 
                <Icon {...option.icon} />
              }
              {option.label}
            </span>

            {selectedOption === option && (
              <Icon name="CheckIcon" color="primary"/>
            )}
          </li>
        )):
        <li>No options found</li>
        }
      </ul>
    </div>
  );
};
