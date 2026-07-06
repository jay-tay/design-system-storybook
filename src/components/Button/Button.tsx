import './Button.css';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
};

export function Button({
  children,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return (
    <button className={`button button--${variant}`} disabled={disabled}>
      {children}
    </button>
  );
}