var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    return (React.createElement("div", { className: "drop-down", style: { maxHeight: maxHeight } },
        React.createElement("ul", null, options.length > 0 ? options.map(function (option) { return (React.createElement("li", { key: option.value, onClick: function () { return onOptionSelect(option); } },
            React.createElement("span", null,
                option.icon &&
                    React.createElement(Icon, __assign({}, option.icon)),
                option.label),
            selectedOption === option && (React.createElement(Icon, { name: "CheckIcon", color: "primary" })))); }) :
            React.createElement("li", null, "No options found"))));
};
