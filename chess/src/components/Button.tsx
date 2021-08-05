import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const ButtonStyled = styled.button`
    min-width: 120px;
    height: 40px;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    letter-spacing: 0.4px;
    text-align: center;
    user-select: none;
    border: none;
    padding: 0 16px;
    border-radius: 4px;
    background:#222328;
    color: white;
    cursor: pointer;
  `;


export default function Button({ children = 'Submit', className, ...rest }: ButtonProps) {
  return (
    <ButtonStyled {...rest}>
      {children}
    </ButtonStyled>
  );
}