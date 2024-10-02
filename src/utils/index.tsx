import { Option } from "@/components/Select/types";

export const sortOptionsByLabel = (options: Option[]): Option[] => {
    return [...options].sort((a, b) => a.label.localeCompare(b.label));
};

export const moveSelectedToFront = (options: Option[], selectedValue: Option): Option[] => {

    const filteredOptions = options.filter((option) => option.value !== selectedValue.value);

    return [selectedValue, ...filteredOptions];
};