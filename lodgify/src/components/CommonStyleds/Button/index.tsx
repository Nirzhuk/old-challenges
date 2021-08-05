import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const ButtonStyled = styled.button`
  min-width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 12px;
  line-height: 40px;
  letter-spacing: 0.4px;
  text-align: center;
  user-select: none;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  background-color:#2C64B7;
  color: white;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(.2, .8, .4, 1);
  transition-property: background-color, color, border-color, box-shadow;
  cursor: pointer;

  &:hover {
    background-color: #3575d4;
    box-shadow: 0 2px 4px 0 rgba(#222328, 0.24);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #B2B2B2;
  }
  `;

export default function Button({ children = 'Submit', className, ...rest }: ButtonProps) {
  return (
    <ButtonStyled data-testid="button" {...rest}>
      {children}
    </ButtonStyled>
  );
}