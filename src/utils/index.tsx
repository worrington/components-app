import { Option } from "@/components/Select/types";

/**
 * Sorts an array of options by their labels in ascending order.
 *
 * @param options - An array of Option objects to be sorted.
 * @returns A new array of Option objects sorted by the `label` property.
 *
 * @example
 * const options = [
 *   { value: 'option2', label: 'Banana' },
 *   { value: 'option1', label: 'Apple' },
 *   { value: 'option3', label: 'Cherry' },
 * ];
 * 
 * const sortedOptions = sortOptionsByLabel(options);
 * // sortedOptions will be:
 * // [
 * //   { value: 'option1', label: 'Apple' },
 * //   { value: 'option2', label: 'Banana' },
 * //   { value: 'option3', label: 'Cherry' },
 * // ]
 */
export const sortOptionsByLabel = (options: Option[]): Option[] => {
  return [...options].sort((a, b) => a.label.localeCompare(b.label));
};

/**
 * Moves the selected option to the front of the array and returns a new array.
 *
 * @param options - An array of Option objects.
 * @param selectedValue - The Option object that should be moved to the front.
 * @returns A new array with the selected option at the front, followed by the other options.
 *
 * @example
 * const options = [
 *   { value: 'option1', label: 'Apple' },
 *   { value: 'option2', label: 'Banana' },
 *   { value: 'option3', label: 'Cherry' },
 * ];
 *
 * const selectedOption = { value: 'option2', label: 'Banana' };
 * const updatedOptions = moveSelectedToFront(options, selectedOption);
 * // updatedOptions will be:
 * // [
 * //   { value: 'option2', label: 'Banana' },
 * //   { value: 'option1', label: 'Apple' },
 * //   { value: 'option3', label: 'Cherry' },
 * // ]
 */
export const moveSelectedToFront = (options: Option[], selectedValue: Option): Option[] => {
  const filteredOptions = options.filter((option) => option.value !== selectedValue.value);

  return [selectedValue, ...filteredOptions];
};



export const filteredOptions = (options: Option[], searchTerm: string) => {
  return options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
};