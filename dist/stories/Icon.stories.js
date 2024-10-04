import * as HeroIcons from '@heroicons/react/24/outline';
import Icon from '@/components/Icon';
// Default configuration for the Icon stories
var meta = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: Object.keys(HeroIcons),
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger'],
        },
        variant: {
            control: 'select',
            options: ["outline", "solid"],
        },
        width: {
            control: 'number',
        },
        height: {
            control: 'number',
        },
    },
    args: {
        name: 'UserCircleIcon',
        width: 24,
        height: 24,
        color: 'primary',
    },
};
export default meta;
// Default story for Icon component
export var Default = {
    args: {
        name: 'UserCircleIcon',
    },
};
// Story with custom size and color
export var CustomSizeAndColor = {
    args: {
        name: 'UserCircleIcon',
        width: 40,
        height: 40,
        color: 'warning',
    },
};
// Story with a different icon
export var DifferentIcon = {
    args: {
        name: 'HomeIcon',
        width: 30,
        height: 30,
        color: 'success',
    },
};
