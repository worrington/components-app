import { Option } from "@/components/Select/types";

export const sortOptionsByLabel = (options: Option[]): Option[] => {
    return [...options].sort((a, b) => a.label.localeCompare(b.label));
};
