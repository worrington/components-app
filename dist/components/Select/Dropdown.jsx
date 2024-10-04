import Icon from "../Icon";
// Height of each option in pixels
var OPTION_HEIGHT = 35;
/**
 * Dropdown Component: Displays the list of selectable options in the dropdown.
 *
 * @param options - Array of options to display in the dropdown.
 * @param selectedOption - The currently selected option.
 * @param maxVisibleOptions - Maximum number of options visible without scrolling.
 * @param onOptionSelect - Callback function to handle option selection.
 */
export var Dropdown = function (_a) {
    var options = _a.options, selectedOption = _a.selectedOption, maxVisibleOptions = _a.maxVisibleOptions, onOptionSelect = _a.onOptionSelect;
    var maxHeight = maxVisibleOptions * OPTION_HEIGHT;
    return (<div className="drop-down" style={{ maxHeight: maxHeight }}>
      <ul>
        {options.length > 0 ? options.map(function (option) { return (<li key={option.value} onClick={function () { return onOptionSelect(option); }}>
            <span>
              {option.icon &&
                <Icon {...option.icon}/>}
              {option.label}
            </span>

            {selectedOption === option && (<Icon name="CheckIcon" color="primary"/>)}
          </li>); }) :
            <li>No options found</li>}
      </ul>
    </div>);
};
