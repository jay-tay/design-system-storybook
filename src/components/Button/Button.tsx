import './Button.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'm' | 'l';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
};

export function Button({
  children,
  variant = 'primary',
  size = 'l',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}