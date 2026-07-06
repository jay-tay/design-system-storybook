import type { ReactNode } from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'M' | 'L';
type IconName = 'plus' | 'arrowRight' | 'check' | 'chevronRight';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  showLeadingIcon?: boolean;
  leadingIcon?: IconName;
  showTrailingIcon?: boolean;
  trailingIcon?: IconName;
};

function ButtonIcon({ name }: { name: IconName }) {
  if (name === 'plus') {
    return (
      <svg className="button__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  if (name === 'arrowRight') {
    return (
      <svg className="button__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }

  if (name === 'chevronRight') {
    return (
      <svg className="button__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 6l6 6-6 6" />
      </svg>
    );
  }

  return (
    <svg className="button__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'L',
  disabled = false,
  showLeadingIcon = false,
  leadingIcon = 'plus',
  showTrailingIcon = false,
  trailingIcon = 'plus',
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--${size.toLowerCase()}`}
      disabled={disabled}
    >
      <span className="button__content">
        {showLeadingIcon && (
          <span className="button__icon button__icon--leading">
            <ButtonIcon name={leadingIcon} />
          </span>
        )}

        <span className="button__label">{children}</span>

        {showTrailingIcon && (
          <span className="button__icon button__icon--trailing">
            <ButtonIcon name={trailingIcon} />
          </span>
        )}
      </span>
    </button>
  );
}