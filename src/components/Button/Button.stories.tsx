import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Buttons allow users to perform an action or navigate to another page. They are used to call attention to important actions and help users move forward in a flow. Use the button component with the appropriate variant, size, state and icon configuration for the level of emphasis required.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description:
        'Controls the visual style of the button. Use Primary for the main action on a screen or section. Use Secondary for lower-emphasis or supporting actions.',
      control: 'select',
      options: ['primary', 'secondary'],
      table: {
        category: 'Appearance',
        type: { summary: "'primary' | 'secondary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description:
        'Controls the button size. This affects padding, border radius, text style, icon size and icon stroke weight.',
      control: 'select',
      options: ['M', 'L'],
      table: {
        category: 'Appearance',
        type: { summary: "'M' | 'L'" },
        defaultValue: { summary: 'L' },
      },
    },
    children: {
      description:
        'The visible label displayed inside the button. Keep labels short, clear and action-led.',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Label' },
      },
    },
    disabled: {
      description:
        'Disables the button and applies the disabled visual treatment. Disabled buttons cannot be interacted with.',
      control: 'boolean',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showLeadingIcon: {
      description:
        'Shows or hides the icon before the button label. Use a leading icon when it helps reinforce the action.',
      control: 'boolean',
      name: 'Show leading icon',
      table: {
        category: 'Icons',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leadingIcon: {
      description:
        'Controls which icon is displayed before the label when the leading icon is enabled.',
      control: 'select',
      options: ['plus', 'arrowRight', 'check', 'chevronRight'],
      name: 'Leading icon',
      table: {
        category: 'Icons',
        type: {
          summary: "'plus' | 'arrowRight' | 'check' | 'chevronRight'",
        },
        defaultValue: { summary: 'plus' },
      },
    },
    showTrailingIcon: {
      description:
        'Shows or hides the icon after the button label. Use a trailing icon for directional or follow-on actions.',
      control: 'boolean',
      name: 'Show trailing icon',
      table: {
        category: 'Icons',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    trailingIcon: {
      description:
        'Controls which icon is displayed after the label when the trailing icon is enabled.',
      control: 'select',
      options: ['plus', 'arrowRight', 'check', 'chevronRight'],
      name: 'Trailing icon',
      table: {
        category: 'Icons',
        type: {
          summary: "'plus' | 'arrowRight' | 'check' | 'chevronRight'",
        },
        defaultValue: { summary: 'plus' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLarge: Story = {
  name: 'Primary / L',
  parameters: {
    docs: {
      description: {
        story:
          'The default large Primary button. Use this for the main action on a screen, form or flow.',
      },
    },
  },
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
  name: 'Primary / L / With icons',
  parameters: {
    docs: {
      description: {
        story:
          'A large Primary button with both leading and trailing icons enabled. Use icons when they add meaning or help clarify the action.',
      },
    },
  },
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
  name: 'Primary / M',
  parameters: {
    docs: {
      description: {
        story:
          'The medium Primary button. Use this where the available space is tighter or where a smaller action is needed.',
      },
    },
  },
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
  name: 'Primary / M / With icons',
  parameters: {
    docs: {
      description: {
        story:
          'A medium Primary button with both leading and trailing icons enabled. The medium size uses smaller icon dimensions and stroke weight than the large size.',
      },
    },
  },
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
  name: 'Secondary / L',
  parameters: {
    docs: {
      description: {
        story:
          'The large Secondary button. Use this for supporting actions that should be visible but less prominent than the Primary action.',
      },
    },
  },
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
  name: 'Secondary / L / With icons',
  parameters: {
    docs: {
      description: {
        story:
          'A large Secondary button with both leading and trailing icons enabled. This is useful for supporting actions that benefit from additional visual context.',
      },
    },
  },
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
  name: 'Disabled / With icons',
  parameters: {
    docs: {
      description: {
        story:
          'A disabled button with icons. Disabled buttons use disabled content and background tokens and cannot be interacted with.',
      },
    },
  },
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