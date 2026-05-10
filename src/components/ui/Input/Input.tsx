import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, className, id, ...props }, ref) => {
    const inputId = id || React.useId();
    
    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            id={inputId}
            ref={ref}
            className={[
              styles.input,
              icon ? styles.hasIcon : '',
              className
            ].filter(Boolean).join(' ')}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
