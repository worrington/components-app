import React from 'react';
/**
 * Label Component: Renders a label for the input field and changes its position and size based on focus.
 *
 * @param htmlFor - The ID of the input field this label is associated with.
 * @param label - The text content of the label.
 * @param isActive - Whether the input field is active (focused or has a value).
 * @param required - Whether the field is required.
 */
export var Label = function (_a) {
    var htmlFor = _a.htmlFor, label = _a.label, isActive = _a.isActive, required = _a.required;
    return (<label htmlFor={htmlFor} className={"".concat(isActive ? "text-xs -top-[8px] bg-white" : "text-base top-2")} data-shrink={isActive}>
    {required && "*"}
    {label}
  </label>);
};
