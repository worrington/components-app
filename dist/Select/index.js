"use client";
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
import React, { useEffect, useState } from "react";
import { filteredOptions, moveSelectedToFront, sortOptionsByLabel } from "@/utils";
import { Label } from "./Label";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";
import "./select.css";
/**
 * `Select` Component: A custom dropdown select component that displays a label,
 * an input field with the selected option, and a dropdown of selectable options.
 */
var Select = function (_a) {
    var label = _a.label, options = _a.options, value = _a.value, isSearched = _a.isSearched, _b = _a.maxVisibleOptions, maxVisibleOptions = _b === void 0 ? 3 : _b, rest = __rest(_a, ["label", "options", "value", "isSearched", "maxVisibleOptions"]);
    // Sort options on initialization
    var sortedOptions = sortOptionsByLabel(options);
    // State management
    var _c = useState(), selectedOption = _c[0], setSelectedOption = _c[1];
    var _d = useState(sortedOptions), optionsList = _d[0], setOptionsList = _d[1];
    var _e = useState(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var _f = useState(), previousSelectedOption = _f[0], setPreviousSelectedOption = _f[1];
    // Handle option selection
    var handleOptionSelect = function (option) {
        var reorderedOptions = moveSelectedToFront(sortedOptions, option);
        setOptionsList(reorderedOptions);
        setSelectedOption(option);
        setPreviousSelectedOption(option);
        setIsDropdownOpen(false);
    };
    // Handle search input change
    var handleSearchChange = function (e) {
        var searchTerm = e.target.value;
        // Update the selected option with the search term
        if (!selectedOption) {
            setPreviousSelectedOption(selectedOption);
        }
        setSelectedOption({ value: "", label: searchTerm });
        // Update options based on the search term
        var filtered = filteredOptions(sortedOptions, searchTerm);
        setOptionsList(filtered);
        if (!isDropdownOpen && searchTerm.length > 0) {
            setIsDropdownOpen(true);
        }
    };
    // Sync the selected option with the value prop
    useEffect(function () {
        if (value) {
            var foundOption = options.find(function (option) { return option.value === value; });
            setSelectedOption(foundOption);
        }
    }, [options, value]);
    // Reset search term when dropdown closes without a valid selection
    useEffect(function () {
        if (!isDropdownOpen && (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) === "") {
            setSelectedOption(previousSelectedOption);
            var reorderedOptions = previousSelectedOption
                ? moveSelectedToFront(sortedOptions, previousSelectedOption)
                : sortedOptions;
            setOptionsList(reorderedOptions);
        }
    }, [isDropdownOpen, previousSelectedOption]);
    return (React.createElement("fieldset", { className: "relative" },
        React.createElement(Label, { htmlFor: (rest === null || rest === void 0 ? void 0 : rest.id) || "select-input", label: label || "", isActive: !!(selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) || isDropdownOpen, required: rest === null || rest === void 0 ? void 0 : rest.required }),
        React.createElement(Input, __assign({}, rest, { id: (rest === null || rest === void 0 ? void 0 : rest.id) || "select-input", value: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || "", onClick: function () { return setIsDropdownOpen(function (prev) { return !prev; }); }, isFocus: isDropdownOpen, isSearched: isSearched, onChange: handleSearchChange })),
        isDropdownOpen && (React.createElement(Dropdown, { options: optionsList, onOptionSelect: handleOptionSelect, maxVisibleOptions: maxVisibleOptions, selectedOption: selectedOption }))));
};
export default Select;
