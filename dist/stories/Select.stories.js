import Select from '@/components/Select';
// Default configuration for the Select stories
var meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        docs: {
            description: {
                component: 'Input Component: A input field that displays the selected option and opens the dropdown.',
            },
        },
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Label for the Select component.',
        },
        value: {
            control: 'text',
            description: 'Currently selected value in the Select component.',
        },
        maxVisibleOptions: {
            control: { type: 'number', min: 3 },
            description: 'Maximum number of options visible in the dropdown.',
        },
        required: {
            control: 'boolean',
            description: 'Whether the Select input is required.',
        },
        options: {
            control: { type: 'object' },
            description: 'Array of options to be rendered in the dropdown.',
        },
        onChange: {
            action: 'changed',
            description: 'Callback fired when the user selects an option.',
        },
        isSearched: {
            control: 'boolean',
            description: 'Indicates whether the input field is in a searched state.',
        }
    },
};
export default meta;
var options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
];
var optionsWithIcons = [
    { value: '1', label: 'Montserrat Delgado', icon: { name: "UserCircleIcon" } },
    { value: '2', label: 'Guillermo Chiw', icon: { name: "UserCircleIcon" } },
    { value: '3', label: 'Dayra Coronado', icon: { name: "UserCircleIcon" } },
    { value: '4', label: 'Alejandro Alvarez', icon: { name: "UserCircleIcon" } },
];
// Represents the basic Select component with the default configuration.
export var Default = {
    args: {
        label: 'Select an option',
        options: options,
        helperText: "Example helper Text",
    },
};
// Renders the select component with a default value.
export var WithSelectedValue = {
    args: {
        label: 'Select an option',
        options: options,
        value: 'option2',
        helperText: "Example helper Text",
    }
};
// Renders the select component with icons in the options
export var WithIcons = {
    args: {
        label: 'Select an option',
        options: optionsWithIcons,
        helperText: "Example helper Text",
    }
};
// Represents a select where the menu has a certain number of visible options.
export var MaxVisibleOptions = {
    args: {
        label: 'Select a value',
        options: Array.from({ length: 20 }, function (_, i) { return ({
            value: "option".concat(i + 1),
            label: "Option ".concat(i + 1),
        }); }),
        maxVisibleOptions: 4,
        helperText: "Example helper Text",
    }
};
// Represents a select with search input
export var SelectWithSearch = {
    args: {
        label: 'Select a value',
        options: optionsWithIcons,
        isSearched: true,
        helperText: "Example helper Text",
    }
};
