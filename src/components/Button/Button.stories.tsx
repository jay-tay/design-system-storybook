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
      options: ['M', 'L'],
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    showLeadingIcon: {
      control: 'boolean',
      name: 'Show leading icon',
    },
    leadingIcon: {
      control: 'select',
      options: ['plus', 'arrowRight', 'check', 'chevronRight'],
      name: 'Leading icon',
    },
    showTrailingIcon: {
      control: 'boolean',
      name: 'Show trailing icon',
    },
    trailingIcon: {
      control: 'select',
      options: ['plus', 'arrowRight', 'check', 'chevronRight'],
      name: 'Trailing icon',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLarge: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'L',
    disabled: false,
    showLeadingIcon: false,
    leadingIcon: 'plus',
    showTrailingIcon: false,
    trailingIcon: 'plus',
  },
};

export const PrimaryLargeWithIcons: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'L',
    disabled: false,
    showLeadingIcon: true,
    leadingIcon: 'plus',
    showTrailingIcon: true,
    trailingIcon: 'plus',
  },
};

export const PrimaryMedium: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'M',
    disabled: false,
    showLeadingIcon: false,
    leadingIcon: 'plus',
    showTrailingIcon: false,
    trailingIcon: 'plus',
  },
};

export const PrimaryMediumWithIcons: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'M',
    disabled: false,
    showLeadingIcon: true,
    leadingIcon: 'plus',
    showTrailingIcon: true,
    trailingIcon: 'plus',
  },
};

export const SecondaryLarge: Story = {
  args: {
    children: 'Label',
    variant: 'secondary',
    size: 'L',
    disabled: false,
    showLeadingIcon: false,
    leadingIcon: 'plus',
    showTrailingIcon: false,
    trailingIcon: 'plus',
  },
};

export const SecondaryLargeWithIcons: Story = {
  args: {
    children: 'Label',
    variant: 'secondary',
    size: 'L',
    disabled: false,
    showLeadingIcon: true,
    leadingIcon: 'plus',
    showTrailingIcon: true,
    trailingIcon: 'plus',
  },
};

export const DisabledWithIcons: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'L',
    disabled: true,
    showLeadingIcon: true,
    leadingIcon: 'plus',
    showTrailingIcon: true,
    trailingIcon: 'plus',
  },
};