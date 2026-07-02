import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const combinedClassName = `btn-primary ${className}`.trim();

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel} 
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
