# Component Library

Welcome to the **Lightwood's Component Library**! 🎉

This project is a collection of reusable components designed for easy integration into your Next.js applications. My goal is to provide a simple way to create a consistent user interface while saving development time.

## Getting Started
You can install the library using npm:

```bash
    npm install lightwood-components-app
```

## npm
To get started with the Component Library, follow these steps:

```bash
    npm i lightwood-components-app
```

# `Select` Component

## Description

The `Select` component is a custom dropdown selection component that displays a label, an input field with the selected option, and a dropdown of selectable options.

## Props

The component accepts the following properties (`props`):

| Prop             | Type               | Description                                                                                       |
|------------------|--------------------|---------------------------------------------------------------------------------------------------|
| `label`          | `string`           | The label displayed next to the select field.                                                    |
| `options`        | `Option[]`         | A list of available options to select from. Each option must have a `value` and a `label`.      |
| `value`          | `string`           | The value of the selected option.                                                                 |
| `isSearched`     | `boolean`          | Indicates if a search is being performed.                                                        |
| `maxVisibleOptions`| `number`         | The maximum number of options displayed in the dropdown menu (default value: 3).                 |
| `...rest`        | `HTMLInputElement` | Any other properties that will be passed to the input component.                                   |

## Usage

### Example Usage

Below is an example of how to use the `Select` component in your React application:

```tsx
import React from 'react';
import Select from 'lightwood-components-app/Select';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

function App() {
  return (
    <div>
      <Select 
        label="Select an option"
        options={options}
        value="1"
        isSearched={false}
        maxVisibleOptions={5}
      />
    </div>
  );
}
```

Read more [here](https://clever-caramel-a20070.netlify.app/?path=/docs/components-select--docs)

### Component Functionality

1. **Initialization**: The component sorts the options on initialization using the `sortOptionsByLabel` function.
2. **Option Selection**: When a user selects an option from the dropdown menu, the `selectedOption` state is updated, and the options are reordered using `moveSelectedToFront`.
3. **Search**: The input field allows users to search for options. When the text in the field changes, the options are filtered using the `filteredOptions` function, and the list of displayed options is updated.
4. **Synchronization**: The component syncs with the received `value` prop to maintain the correct state of the selected option.
5. **Interaction**: Clicking on the input field will toggle the dropdown menu open or closed.


### GitHub

To get started with the Component Library, follow these steps:

1. **Clone the repository**:
```bash
   git clone https://github.com/worrington/components-app
   cd component-library
```

Install dependencies:

```bash
    npm install
```

Run the development server:

```bash
    npm run dev
```
Open your browser and navigate to http://localhost:3000 to see your components in action!

Available Components

1. Select Component
The Select component allows users to choose an option from a dropdown list. It is designed to be customizable and easy to use. Here’s a simple example of how to use it:

```tsx
import Select from '@/components/Select';

const MyComponent = () => {
  return (
    <Select
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
      placeholder="Select an option"
    />
  );
};
```
2. Icon Component
The Icon component provides a set of scalable icons that you can easily integrate into your projects. Here’s how to use it:

```tsx
import Icon from '@/components/Icon';

const MyComponent = () => {
  return <Icon name="home" size={24} />;
};
```

3. Run Storybook
To view and interact with the UI components in Storybook, run:

```bash
    npm run storybook
```

Storybook will be available at `bashhttp://localhost:6006.`

Styles
This project uses Tailwind CSS for styling. Feel free to customize the Tailwind configuration to match your design needs.

Contributing
Contributions are welcome! If you have suggestions for new components or improvements, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Happy coding! 🚀
