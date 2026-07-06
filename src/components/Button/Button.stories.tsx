import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['m', 'l'],
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLarge: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'l',
    disabled: false,
  },
};

export const PrimaryMedium: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'm',
    disabled: false,
  },
};

export const SecondaryLarge: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'l',
    disabled: false,
  },
};

export const SecondaryMedium: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'm',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'l',
    disabled: true,
  },
};