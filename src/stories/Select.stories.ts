

import { StoryObj, Meta } from '@storybook/react';
import Select from '@/components/Select';
import { Option } from '@/components/Select/types';

const meta = {
  title: 'Components/Select',
  component: Select,  // Aquí usamos el componente directamente
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
} satisfies Meta<typeof Select>

export default meta;

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

type Story = StoryObj<typeof meta>;
// Story template

export const Default: Story = {
  args: {
    label: 'Select an option',
    options,
    maxVisibleOptions: 3,
  },
};

export const WithSelectedValue: Story = {
  args: {
    label: 'Select an option',
    options,
    value: 'option2',
    maxVisibleOptions: 3,
  }
};

export const ManyOptions: Story = {
  args: {
    label: 'Select a value',
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    maxVisibleOptions: 5,
  }
};

export const RequiredSelect: Story = {
  args: {
  label: 'Select an option',
  options,
  required: true,
}
};
