import { StoryObj, Meta } from '@storybook/react';
import Select from '@/components/Select';
import { Option } from '@/components/Select/types';

// Default configuration for the Select stories
const meta: Meta<typeof Select> = {
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
  },
};

export default meta;

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

const optionsWithIcons: Option[] = [
  { value: '1', label: 'Montserrat Delgado', icon: {name: "UserCircleIcon"} },
  { value: '2', label: 'Guillermo Chiw', icon: {name: "UserCircleIcon"} },
  { value: '3', label: 'Dayra Coronado', icon: {name: "UserCircleIcon"} },
  { value: '4', label: 'Alejandro Alvarez', icon: {name: "UserCircleIcon"} },
];

export type Story = StoryObj<typeof Select>;

// Represents the basic Select component with the default configuration.
export const Default: StoryObj<typeof Select> = {
  args: {
    label: 'Select an option',
    options,
  },
}

// Renders the select component with a default value.
export const WithSelectedValue: Story = {
  args: {
    label: 'Select an option',
    options,
    value: 'option2',
  }
};

// Renders the select component with icons in the options
export const WithIcons: Story = {
  args: {
    label: 'Select an option',
    options: optionsWithIcons,
  }
};

// Represents a select where the menu has a certain number of visible options.
export const MaxVisibleOptions: Story = {
  args: {
    label: 'Select a value',
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    maxVisibleOptions: 4,
  }
};
