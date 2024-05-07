import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  styleType = 'primary',
}) => {
  return (
    <button type={type} onClick={onClick} className={`button ${styleType}`}>
      {children}
    </button>
  );
};
