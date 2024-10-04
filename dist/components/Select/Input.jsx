var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import Icon from "../Icon";
/**
   * Input Component: A input field that displays the selected option and opens the dropdown.
   *
   * @param id - The ID of the input field.
   * @param value - The currently selected option's label.
   * @param isFocus - Whether the input is currently focused/open.
   * @param onClick - A callback function that opens the dropdown menu.
   * @param rest - Additional input props (e.g., placeholder, disabled).
   */
export var Input = function (_a) {
    var id = _a.id, value = _a.value, isFocus = _a.isFocus, _b = _a.isSearched, isSearched = _b === void 0 ? false : _b, onClick = _a.onClick, rest = __rest(_a, ["id", "value", "isFocus", "isSearched", "onClick"]);
    return (<div className="select" onClick={onClick}>
    <input {...rest} autoComplete="off" id={id} value={value} readOnly={!isSearched} className={"".concat(isFocus && "border-deepTeal")}/>
    <span>
      <Icon name="ChevronDownIcon" height={20} width={20}/>
    </span>
  </div>);
};
